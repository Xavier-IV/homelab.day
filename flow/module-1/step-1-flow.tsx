"use client";

import { Usb } from "lucide-react";
import ReactFlow, { Background, Controls } from "reactflow";

export default function Step1Flow() {
  const nodes = [
    {
      id: "1",
      data: { label: "Homelab" },
      type: "output",
      position: { x: 100, y: 100 },
      style: {
        borderColor: "#cbd5e1",
        color: "#cbd5e1",
      },
    },
    {
      id: "2",
      data: { label: "Personal PC" },
      type: "output",
      position: { x: 300, y: 100 },
      style: {
        backgroundColor: "#4ade80",
      },
    },
    {
      id: "3",
      data: { label: "Router" },
      position: { x: 200, y: 0 },
      style: {
        backgroundColor: "#4ade80",
      },
    },

    {
      id: "4",
      data: { label: "Internet" },
      position: { x: 200, y: -200 },
      style: { backgroundColor: "#4ade80" },
    },
  ];

  const edges = [
    { id: "e2-2", source: "3", target: "1", style: { stroke: "#cbd5e1" } },
    { id: "e2-3", source: "3", target: "2", animated: true },
    { id: "e4-3", source: "4", target: "3", animated: true },
  ];

  return (
    <ReactFlow
      contentEditable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      nodes={nodes}
      edges={edges}
      fitView
    >
      <Background gap={16} />
      <Controls />
    </ReactFlow>
  );
}
