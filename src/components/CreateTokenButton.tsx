'use client'; // This line makes this component a client component

import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

interface CreateTokenButtonProps {
    className?: string;
}

const CreateTokenButton: React.FC<CreateTokenButtonProps> = ({ className }) => {
    return (
        <Button
            size="lg"
            className={`bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${className || ''}`}
        >
            <Link href="/launch">Create Token</Link>
        </Button>
    );
};

export default CreateTokenButton;
