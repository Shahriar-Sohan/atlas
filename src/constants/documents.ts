import type { DocumentCardProps } from "@/components/wallet/document-card";

type WalletDocument = DocumentCardProps & {id: string}

export const documents: WalletDocument[] = [
    {
        id: "1",
        title: "Driving licence",
        subtitle: "PORTUGAL · CATEGORY B",
        holder: "Alex Morgan",
        color: "#365578",
        icon: "truck",
    },
    {
        id: "2",
        title: "Residence permit",
        subtitle: "PORTUGAL · TEMPORARY",
        holder: "Alex Morgan",
        color: "#3B675E",
        icon: "credit-card",
    },
]