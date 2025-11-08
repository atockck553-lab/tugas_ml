import React from "react";

const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
    gray: "bg-gray-600 hover:bg-gray-700 text-white",
};

export default function UploadButton({ onFileSelect, label, color = "green" }) {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
            onFileSelect(file);
        } else {
            alert("Please upload a valid video file.");
        }
    };

    return (
        <label
            className={`cursor-pointer inline-block px-6 py-2 rounded-md transition select-none ${colorClasses[color]}`}
        >
            {label}
            <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleChange}
            />
        </label>
    );
}
