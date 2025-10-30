import { createFileRoute } from "@tanstack/react-router";
import { ScrollTriggered } from "@/components/ScrollTriggered";

export const Route = createFileRoute("/")({ component: ScrollTriggered });
