import React from "react";


const Footer = () => {
return (
    <footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center justify-between">
      <div class="w-full md:w-1/4 mb-4 md:mb-0">
        <img src="company-logo.png" alt="Company Logo" class="h-10"></img>
        <p class="text-sm">Your Company</p>
      </div>
      <div class="w-full md:w-1/4 mb-4 md:mb-0">
        <h3 class="text-lg mb-2">Follow us on Instagram</h3>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-300 hover:text-white">Instagram 1</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white">Instagram 2</a></li>
          <li><a href="#" class="text-gray-300 hover:text-white">Instagram 3</a></li>
        </ul>
      </div>
      <div class="w-full md:w-1/2">
        <p class="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
);
};
export default Footer;
