"use client";

import React from "react";
import ProjectHeader from "@/components/ProjectHeader";

export default function ProjectLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProjectHeader />
      <main className="pt-16">{children}</main>
    </div>
  );
}
