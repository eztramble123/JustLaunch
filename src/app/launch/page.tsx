import React from 'react';
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Launch() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Token Transfer</h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">From</label>
                    <div className="flex justify-between">
                        <div className="w-1/2 mr-2">
                            <Select>
                                <option>Select Token</option>
                                {/* Add your token options here */}
                            </Select>
                        </div>
                        <div className="w-1/2">
                            <Select>
                                <option>Select Network</option>
                                {/* Add your network options here */}
                            </Select>
                        </div>
                    </div>
                    <label className="block text-sm font-medium text-gray-700 mt-4">B@B Tokens:</label>
                    <Input placeholder="Amount 0.0000" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">To</label>
                    <div className="flex justify-between">
                        <div className="w-1/2 mr-2">
                            <Select>
                                <option>Select Token</option>
                                {/* Add your token options here */}
                            </Select>
                        </div>
                        <div className="w-1/2">
                            <Select>
                                <option>Select Network</option>
                                {/* Add your network options here */}
                            </Select>
                        </div>
                    </div>
                    <label className="block text-sm font-medium text-gray-700 mt-4">B@B Tokens:</label>
                    <Input placeholder="Amount 0.0000" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gas on Destination</label>
                    <Input placeholder="Gas Amount" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Fees</label>
                    <Input placeholder="Fees Amount" />
                </div>

                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Connect</Button>
            </div>
        </div>
    );
}
