import { ArrowRight, Search, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const navigate = useNavigate();

    return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main hero content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your future <span className="text-blue-600">starts here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            25,000+ Internships for freshers, students & graduates!
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/internships")} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
              <Search className="w-5 h-5 mr-2" />
              Find Internships
            </button>
            <button onClick={()=>navigate("/post-job")} className="bg-white cursor-pointer hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-200 flex items-center justify-center transition-colors">
              <Briefcase className="w-5 h-5 mr-2" />
              Post Internship
            </button>
          </div>
        </div>

        {/* Categories section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Jobs, Internships & Hiring Challenges
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Human resources', 'Software Development', 'Marketing', 'Operations', 'Finance'].map((category) => (
              <div key={category} className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center cursor-pointer transition-colors">
                <p className="text-gray-700 font-medium">{category}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a onClick={()=>navigate("/internships")} className="cursor-pointer inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View all internships
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-600 mt-8">
          Find the Internships and Jobs that fit your career aspirations.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;