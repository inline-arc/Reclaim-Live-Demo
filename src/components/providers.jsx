"use client"

import { useEffect, useState } from "react"
import QRCodeDisplay from "./qr-code"
import * as Toast from "@radix-ui/react-toast"
import dataProvider from "../metadata.jsx";
import { useProvider } from "./context/useProvider.jsx";
import {
  Search,
  QrCode,
  Copy,
  Check,
  X,
  Filter,
  Plus,
  Users,
  Home,
  ArrowRight,
  Github,
  Mail,
  Linkedin,
  Twitter,
  User,
  ScanLine,
  Info,
} from "lucide-react"

const VerificationPlatform = () => {
  const [url, setUrl] = useState("https://example.com/verify/abc123")
  const [copied, setCopied] = useState(false);

  const setProviderId = useProvider((state) => state.setProviderId); //set

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const providers = dataProvider;

  return (
    <>
    <div className="flex min-h-screen bg-[#f8f9fa]">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-w sticky top-0 z-10">
          <div className="container px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 gap-2 flex items-center ">
                  <img src="https://reclaimprotocol.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa286e6c7-2514-47c8-a776-44b02bb2aa86%2F4342ccfd-3218-4aa8-9bb4-2081161edb3d%2FReclaim_logo_New.jpg?table=block&id=13c275b8-16cb-80b1-a5ad-e76c6f2532dd&spaceId=a286e6c7-2514-47c8-a776-44b02bb2aa86&width=250&userId=&cache=v2"/>
              </div>
              <h1 className="text-xl font-bold"> Live Playground</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-full border border-slate-800 text-slate-800 hover:bg-blue-50 transition-colors">
                Documentation
              </button>
              <button className="px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-800 transition-colors">
                Talk to our team
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          {/* Providers Grid */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Explore Providers</h2>
                <p className="text-gray-600">Providers built by community</p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                    <Plus size={16} />
                    <span>New Provider</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {providers.map((provider) => (
                  <div
                    key={provider.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Verified
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                        <img
                          src={provider.logo || "/placeholder.svg"}
                          alt={provider.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{provider.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users size={14} />
                          <span>{provider.users}</span>
                        </div>
                        <button
                          onClick={() => {
                            setProviderId(String(provider.providerId));
                            console.log(provider.providerId);
                          }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50">
                          <User size={14} />
                          Try Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QR Code Container */}
            <QRCodeDisplay/>
          </div>

      {/* Toast Notification */}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className="bg-white rounded-lg shadow-lg border p-4 grid grid-cols-[auto_max-content] gap-x-4 items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={copied}
          onOpenChange={setCopied}
        >
          <Toast.Title className="flex items-center text-sm font-medium">
            <Check size={16} className="text-green-500 mr-2" />
            URL copied to clipboard
          </Toast.Title>
          <Toast.Action
            className="inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium"
            asChild
            altText="Close"
          >
            <button className="text-gray-500 hover:text-gray-700">
              <X size={14} />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-2 w-[390px] max-w-[100vw] m-0 list-none z-50 outline-none" />
      </Toast.Provider>
          </div>
        </div>
    </>
  )
}

export default VerificationPlatform

