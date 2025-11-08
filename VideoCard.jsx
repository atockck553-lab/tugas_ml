export default function VideoCard({ video }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-1">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{video.description}</p>
            <p className="text-blue-500 text-sm font-medium">
                📊 Sentiment: {video.sentiment}
            </p>
        </div>
    );
}
