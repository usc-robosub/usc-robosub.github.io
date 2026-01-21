"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { terminalReveal, terminalLineReveal, staggerContainerFast } from "@/lib/animations";

interface TerminalLine {
  prompt?: string;
  command?: string;
  output?: string;
  status?: "pass" | "fail" | "pending";
}

interface TerminalCardProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
  showDots?: boolean;
}

export function TerminalCard({
  title = "terminal",
  lines,
  className = "",
  showDots = true,
}: TerminalCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`terminal ${className}`}
      variants={terminalReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="terminal-header">
        {showDots && (
          <div className="terminal-dots">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
          </div>
        )}
        <span className="terminal-title">{title}</span>
      </div>
      <motion.div
        className="terminal-body"
        variants={staggerContainerFast}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="terminal-line"
            variants={terminalLineReveal}
          >
            {line.prompt && (
              <span className="terminal-prompt">{line.prompt}</span>
            )}
            {line.command && (
              <span className="terminal-command">{line.command}</span>
            )}
            {line.output && (
              <span className="terminal-output">{line.output}</span>
            )}
            {line.status && (
              <span className={`terminal-status ${line.status}`}>
                {line.status.toUpperCase()}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Deployment status variant
interface DeploymentStatus {
  name: string;
  status: "pass" | "fail" | "pending";
}

interface DeploymentTerminalProps {
  environment: string;
  prompt: string;
  command: string;
  deployments: DeploymentStatus[];
  className?: string;
}

export function DeploymentTerminal({
  environment,
  prompt,
  command,
  deployments,
  className = "",
}: DeploymentTerminalProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`terminal ${className}`}
      variants={terminalReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
      </div>
      <motion.div
        className="terminal-body"
        variants={staggerContainerFast}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="terminal-line"
          variants={terminalLineReveal}
          style={{ marginBottom: "16px" }}
        >
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-command">{command}</span>
        </motion.div>
        {deployments.map((deployment, index) => (
          <motion.div
            key={index}
            className="terminal-line"
            variants={terminalLineReveal}
          >
            <span className="terminal-prompt">›</span>
            <span className="terminal-output">
              {deployment.name}
              <span style={{ 
                display: "inline-block",
                width: "calc(100% - 200px)",
                borderBottom: "1px dotted var(--text-muted)",
                margin: "0 8px",
                verticalAlign: "middle",
              }} />
            </span>
            <span className={`terminal-status ${deployment.status}`}>
              {deployment.status.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TerminalCard;

