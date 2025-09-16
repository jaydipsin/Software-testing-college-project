import { MapPin, Calendar, Clock, IndianRupee, Briefcase } from "lucide-react";
import { InternshipsData } from "../../data/Internships";

const Internships = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Internships</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {InternshipsData.map((currItem, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              {/* Title and Company */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{currItem.title}</h3>
                <p className="text-blue-600 font-medium">{currItem.company}</p>
              </div>

              {/* Location and Date */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {currItem.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {currItem.updatedOn}
                </div>
              </div>

              {/* Stipend and Timing */}
              <div className="flex justify-between mb-4">
                <div className="flex items-center text-green-600 font-medium">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  {currItem.stipend.split('\n')[0]}
                </div>
                <div className="flex items-center text-purple-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {currItem.timing}
                </div>
              </div>

              {/* Details */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{currItem.Details}</p>

              {/* Recruitment Process */}
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-800 font-medium">Recruitment Process:</p>
                <p className="text-xs text-blue-700 mt-1 line-clamp-3">{currItem.recruitmentProcess}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button className="text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View Details
                </button>
                <button className="flex items-center text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors">
                  <Briefcase className="h-3 w-3 mr-1" />
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;