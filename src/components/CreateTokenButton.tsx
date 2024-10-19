'use client'; // This line makes this component a client component

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function CreateTokenButton() {
    const router = useRouter();

    const handleCreateToken = () => {
        router.push('/launch'); // Navigate to the launch page
    };

    return (
        <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white"
        >
            <Link href="/launch">Create Token</Link>
        </Button>
    );
}
