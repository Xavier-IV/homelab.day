"use client";

import { Usb, UserRound } from "lucide-react";
import ReactFlow, { Background, Controls } from "reactflow";

export default function Step3Flow() {
  const nodes = [
    {
      id: "1",
      type: "output",
      data: { label: "Homelab" },
      position: { x: 100, y: 100 },
      style: {
        borderColor: "#4ade80",
        color: "#4ade80",
      },
    },
    {
      id: "2",
      data: { label: "Personal PC" },
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
      id: "5",
      type: "output",
      data: {
        label: (
          <div className="flex items-center justify-center">
            <UserRound width="100%" height="100%" />
          </div>
        ),
      },
      position: { x: 356, y: 180 },
      style: {
        width: 40,
        height: 40,
      },
    },
  ];

  const edges = [
    {
      id: "e2-2",
      source: "3",
      target: "1",
      animated: true,
    },
    { id: "e2-3", source: "3", target: "2", animated: true },
    { id: "e4-3", source: "4", target: "3" },
    { id: "e5-1", source: "2", target: "5", label: "You" },
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
