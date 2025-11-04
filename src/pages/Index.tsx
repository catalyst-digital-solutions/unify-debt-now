import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-mgc-yellow via-mgc-cream to-white">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-mgc-dark-gray">Mesa Group Consulting</h1>
        <p className="text-xl text-gray-700 mb-8">Financial Solutions That Work For You</p>
        <button 
          onClick={() => navigate('/debt-consolidation')}
          className="bg-mgc-gold hover:bg-mgc-yellow text-white hover:text-mgc-dark-gray text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
        >
          View Debt Consolidation Options
        </button>
      </div>
    </div>
  );
};

export default Index;
