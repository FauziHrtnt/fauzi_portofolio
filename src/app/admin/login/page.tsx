"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Column, Heading, PasswordInput, Text, Badge, Row } from "@once-ui-system/core";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/admin";
      } else {
        const data = await res.json();
        setError(data.message || "Kata sandi salah");
      }
    } catch (err) {
      setError("Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Column fillWidth style={{ minHeight: "80vh" }} horizontal="center" align="center" padding="m">
      <Column maxWidth={24} fillWidth gap="l" background="surface" border="neutral-alpha-medium" radius="l" padding="xl">
        <Row horizontal="center">
          <Badge textVariant="label-default-s" background="brand-alpha-weak">
            Admin Panel
          </Badge>
        </Row>

        <Column gap="s" horizontal="center" align="center">
          <Heading variant="display-strong-xs" align="center">
            Login Administrator
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            Masukkan kata sandi untuk mengelola data portofolio
          </Text>
        </Column>

        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <Column gap="m" fillWidth>
            <PasswordInput
              id="password"
              label="Kata Sandi Admin"
              placeholder="Masukkan password admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={error || undefined}
            />

            <Button type="submit" onClick={handleLogin} size="m" fillWidth variant="primary" disabled={loading}>
              {loading ? "Memverifikasi..." : "Masuk ke Dashboard"}
            </Button>
          </Column>
        </form>

        <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
          Kata sandi default: <strong style={{ color: "var(--brand-solid-strong)" }}>admin</strong> (dapat diubah di .env.local)
        </Text>
      </Column>
    </Column>
  );
}
