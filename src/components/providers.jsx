"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import * as Separator from "@radix-ui/react-separator"
import * as Toast from "@radix-ui/react-toast"
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
} from "lucide-react"

const VerificationPlatform = () => {
  const [url, setUrl] = useState("https://example.com/verify/abc123")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Sample data for providers
  const providers = [
    {
      id: 1,
      name: "GitHub UserName",
      description: "Prove your GitHub User Name",
      icon: <Github size={24} />,
      logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      users: 386,
      active: true,
      verified: true,
    },
    {
      id: 2,
      name: "Gmail Account",
      description: "Proves your gmail Id",
      icon: <Mail size={24} />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
      users: 192,
      active: true,
      verified: true,
    },
    {
      id: 3,
      name: "Binance KYC Level",
      description: "Name, Surname, DOB, Status",
      icon: <User size={24} />,
      logo: "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
      users: 85,
      active: true,
      verified: true,
    },
    {
      id: 4,
      name: "LinkedIn - User Profile",
      description: "Verify user profile details from linkedin",
      icon: <Linkedin size={24} />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
      users: 84,
      active: true,
      verified: true,
    },
    {
      id: 5,
      name: "Twitter Follow Check",
      description: "Twitter Follow Check",
      icon: <Twitter size={24} />,
      logo: "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png",
      users: 51,
      active: true,
      verified: true,
    },
    {
      id: 6,
      name: "identity_github00",
      description: "Prove your GitHub User Name",
      icon: <Github size={24} />,
      logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      users: 42,
      active: true,
      verified: true,
    },
    {
      id: 7,
      name: "Twitter User Profile",
      description: "Verifies twitter profile of user",
      icon: <Twitter size={24} />,
      logo: "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png",
      users: 39,
      active: true,
      verified: true,
    },
    {
      id: 8,
      name: "LinkedIn - User Profile Details",
      description: "Verify user profile details from linkedin",
      icon: <Linkedin size={24} />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
      users: 32,
      active: true,
      verified: true,
    },
  ]


  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="md:hidden w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <QrCode size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold">Verification Platform</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
                Documentation
              </button>
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
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
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50">
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
          <Separator.Root
            className="bg-gray-200 data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[1px]"
            orientation="vertical"
          />

          <div className="w-full md:w-80 p-6 bg-white border-l flex flex-col">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Verification QR</h2>
              <p className="text-sm text-gray-500">Scan to verify your identity</p>
            </div>

            <div className="bg-gray-50 border rounded-lg p-6 flex items-center justify-center mb-4 aspect-square">
              <div className="flex flex-col items-center justify-center">
                <QrCode size={180} className="text-blue-600" />
                <p className="mt-4 text-sm text-gray-500">QR Code for Verification</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Verification URL</label>
              <div className="flex">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="mt-auto">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Start Verification
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
                  <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title className="text-lg font-bold">Verification Process</Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                      Follow these steps to complete your verification.
                    </Dialog.Description>

                    <div className="mt-4 space-y-3">
                      <p className="text-sm">1. Scan the QR code with your mobile device</p>
                      <p className="text-sm">2. Follow the instructions on your device</p>
                      <p className="text-sm">3. Wait for the verification to complete</p>
                    </div>

                    <Dialog.Close asChild>
                      <button
                        className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100"
                        aria-label="Close"
                      >
                        <X size={16} />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </div>
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
  )
}

export default VerificationPlatform

