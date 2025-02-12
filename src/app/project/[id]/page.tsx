"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/app/projectData/projectData";
import { Image } from "@chakra-ui/react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [project, setProject] = useState<null | (typeof projects)[0]>(null);

  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      const numericId = parseInt(resolvedParams.id, 10);
      const foundProject = projects.find((p) => p.id === numericId);
      setProject(foundProject || null);
    }

    unwrapParams();
  }, [params]);

  if (!project) {
    return <p>Project not found</p>;
  }

  const { title, size, image, description, price } = project;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h1>
        <Image
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "contain",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        />
        <p style={{ fontSize: "16px", marginBottom: "10px", color: "black" }}>
          {description}
        </p>
        <p style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}>
          Size: {size}
        </p>
        <p style={{ fontWeight: "bold", fontSize: "18px", color: "black" }}>
          {price}
        </p>

        <button
          onClick={() => router.push("/projects")}
          style={{
            marginTop: "15px",
            padding: "10px 15px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#333")}
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
}
