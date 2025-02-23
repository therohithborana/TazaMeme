import MainLayout from '@/components/layout/MainLayout';
import NewsList from '@/components/ui/NewsList';

export default function Home() {
  return (
    <MainLayout>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Taza Khabar se Fresh Meme
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your AI-powered Indian news meme generator
        </p>
        <div className="max-w-4xl mx-auto">
          {/* <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Latest Indian News
          </h3> */}
          <NewsList />
        </div>
      </div>
    </MainLayout>
  );
} 