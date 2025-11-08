import React, { useState } from "react";
import UploadButton from "./upload.jsx";

export default function App() {
    const [videoSrc, setVideoSrc] = useState(null);

    const handleFileSelect = (file) => {
        const url = URL.createObjectURL(file);
        setVideoSrc(url);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <h1 className="text-4xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                🎬 AI Video Analyzer
            </h1>

            <div className="flex gap-4">
                <UploadButton onFileSelect={handleFileSelect} label="Upload" />
                <UploadButton onFileSelect={handleFileSelect} label="Choose" />
            </div>

            {videoSrc && (
                <video
                    className="mt-6 rounded shadow-lg max-w-full"
                    src={videoSrc}
                    controls
                />
            )}

            <p className="mt-10 text-gray-500 text-sm">
                Frontend React + Tailwind siap!
            </p>
        </div>
    );
}
