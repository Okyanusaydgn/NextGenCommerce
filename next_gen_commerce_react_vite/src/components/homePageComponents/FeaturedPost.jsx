import React from "react";
import home_page_graphic_design_pic_1 from "../../assets/home_page_graphic_design_pic_1.png";
import home_page_graphic_design_pic_2 from "../../assets/home_page_graphic_design_pic_2.png";
import mobile_featured_post1 from "../../assets/mobile_featured_post1.png";
import mobile_featured_post2 from "../../assets/mobile_featured_post2.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS dosyasını dahil ediyoruz

const FeaturedPosts = () => {
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-center text-3xl font-bold mb-6">Featured Posts</h2>
      <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-8">
        {/* İlk Kart */}
        <div className="hidden lg:flex w-full lg:w-1/2 p-4 border rounded-md shadow-lg relative">
          <div className="w-1/2 p-2 relative">
            <img
              src={home_page_graphic_design_pic_1}
              alt="Graphic Design"
              className="w-full h-full object-cover rounded-md"
              style={{ width: "209px", height: "404px" }}
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Sale
            </span>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="bg-white rounded-full p-2 shadow-md">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white rounded-full p-2 shadow-md">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="bg-white rounded-full p-2 shadow-md">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="text-blue-600 text-sm font-bold">
              English Department
            </h3>
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex items-center mt-4">
              <i className="fas fa-star text-yellow-400 mr-1"></i>
              <span className="text-gray-600 text-sm">4.9</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-600 text-sm">15 Sales</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-gray-600 text-sm line-through mr-2">
                $16.48
              </span>
              <span className="text-green-600 text-lg font-bold">$6.48</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="block w-4 h-4 bg-[#23A6F0] rounded-full"></span>
              <span className="block w-4 h-4 bg-[#23856D] rounded-full"></span>
              <span className="block w-4 h-4 bg-[#E77C40] rounded-full"></span>
              <span className="block w-4 h-4 bg-[#252B42] rounded-full"></span>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center">
                <i className="far fa-clock text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">22h</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-book text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">64 Lessons</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chart-line text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">Progress</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* İkinci Kart */}
        <div className="hidden lg:flex w-full lg:w-1/2 p-4 border rounded-md shadow-lg relative">
          <div className="w-1/2 p-2 relative">
            <img
              src={home_page_graphic_design_pic_2}
              alt="Graphic Design"
              className="w-full h-full object-cover rounded-md"
              style={{ width: "209px", height: "404px" }}
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Sale
            </span>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="bg-white rounded-full p-2 shadow-md">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white rounded-full p-2 shadow-md">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="bg-white rounded-full p-2 shadow-md">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="text-blue-600 text-sm font-bold">
              English Department
            </h3>
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex items-center mt-4">
              <i className="fas fa-star text-yellow-400 mr-1"></i>
              <span className="text-gray-600 text-sm">4.9</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-600 text-sm">15 Sales</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-gray-600 text-sm line-through mr-2">
                $16.48
              </span>
              <span className="text-green-600 text-lg font-bold">$6.48</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="block w-4 h-4 bg-[#23A6F0] rounded-full"></span>
              <span className="block w-4 h-4 bg-[#23856D] rounded-full"></span>
              <span className="block w-4 h-4 bg-[#E77C40] rounded-full"></span>
              <span className="block w-4 h-4 bg-[#252B42] rounded-full"></span>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center">
                <i className="far fa-clock text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">22h</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-book text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">64 Lessons</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chart-line text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">Progress</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Kart */}
        <div className="block lg:hidden w-full p-4 border rounded-md shadow-lg">
          <img
            src={mobile_featured_post1}
            alt="Loudest à la Madison #1"
            className="w-full object-cover rounded-md"
            style={{ width: "330px", height: "300px" }}
          />

          <div className="mt-4">
            <div className="flex space-x-2">
              <span className="text-gray-500 text-xs">Google</span>
              <span className="text-gray-500 text-xs">Trending</span>
              <span className="text-gray-500 text-xs">New</span>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              Loudest à la Madison #1 (L'integral)
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex items-center mt-4">
              <i className="far fa-calendar-alt text-gray-500 mr-2"></i>
              <span className="text-gray-600 text-xs">22 April 2021</span>
              <i className="far fa-comment text-gray-500 ml-4 mr-2"></i>
              <span className="text-gray-600 text-xs">10 comments</span>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-500 text-sm font-semibold">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* İkinci Mobil Kart */}
        <div className="block lg:hidden w-full p-4 border rounded-md shadow-lg mt-4">
          <img
            src={mobile_featured_post2}
            alt="Loudest à la Madison #1"
            className="w-full object-cover rounded-md"
            style={{ width: "330px", height: "300px" }}
          />
          <div className="mt-4">
            <div className="flex space-x-2">
              <span className="text-gray-500 text-xs">Google</span>
              <span className="text-gray-500 text-xs">Trending</span>
              <span className="text-gray-500 text-xs">New</span>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              Loudest à la Madison #1 (L'integral)
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex items-center mt-4">
              <i className="far fa-calendar-alt text-gray-500 mr-2"></i>
              <span className="text-gray-600 text-xs">22 April 2021</span>
              <i className="far fa-comment text-gray-500 ml-4 mr-2"></i>
              <span className="text-gray-600 text-xs">10 comments</span>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-500 text-sm font-semibold">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
