import React from 'react'

export function Footer() {
  return (
    <div className="bg-yellow-200/70  py-10 mt-[30px] overflow-hidden">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          
          <div>
            <h1 className="text-yellow-400 text-2xl font-bold mb-3">Foodie</h1>
            <p className=" text-sm">
              We will fill your tummy with delicious food and delivery.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-lg mb-2">Our Menu</h1>
            <ul className="space-y-1 ">
              <li>Special</li>
              <li>Custom</li>
              <li>Normal</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-lg mb-2">Company</h1>
            <ul className="space-y-1 ">
              <li>Why Foodie</li>
              <li>Good Bite</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-lg mb-2">Support</h1>
            <ul className="space-y-1">
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-10 text-sm">
          © 2025 Foodie. All rights reserved.
        </div>
      </div>
    </div>
  )
}
