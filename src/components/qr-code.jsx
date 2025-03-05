"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import * as Tabs from "@radix-ui/react-tabs"
import * as Toast from "@radix-ui/react-toast"
import * as Separator from "@radix-ui/react-separator"
import { QrCode, Copy, X, Info, Check } from "lucide-react"

const QRCodeDisplay = () => {
  const [url, setUrl] = useState("https://example.com/share/abc123")
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen bg-slate-50 p-4">
      <div className="flex flex-col w-full max-w-5xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <header className="p-4 border-b">
          <h1 className="text-xl font-semibold">QR Code Generator</h1>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          {/* Main content */}
          <div className="flex-1 p-6">
            <Tabs.Root defaultValue="generate">
              <Tabs.List className="flex border-b mb-4">
                <Tabs.Trigger
                  value="generate"
                  className="px-4 py-2 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
                >
                  Generate QR Code
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="history"
                  className="px-4 py-2 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
                >
                  History
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="generate" className="outline-none">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                      Enter URL
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com"
                      />
                      <button
                        onClick={copyToClipboard}
                        className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Generate QR Code
                    </button>
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content value="history" className="outline-none">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Your previously generated QR codes will appear here.</p>
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>

          {/* Side container for QR code */}
          <Separator.Root
            className="bg-gray-200 data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[1px]"
            orientation="vertical"
          />

          <div className="w-full md:w-80 p-6 bg-gray-50 flex flex-col">
            <div className="text-center mb-4">
              <h2 className="text-lg font-medium">Your QR Code</h2>
            </div>

            <div className="bg-white border rounded-lg p-4 flex items-center justify-center mb-4 aspect-square">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <QrCode size={150} />
                <p className="mt-2 text-sm">QR Code Preview</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 break-all">{url}</p>
            </div>

            <div className="mt-auto">
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                    <Info size={16} className="mr-2" />
                    View Usage Instructions
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
                  <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title className="text-lg font-medium">How to Use QR Codes</Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                      QR codes can be scanned using any smartphone camera app.
                    </Dialog.Description>

                    <div className="mt-4 space-y-3">
                      <p className="text-sm">1. Generate a QR code by entering a URL</p>
                      <p className="text-sm">2. Download or share the QR code</p>
                      <p className="text-sm">3. Users can scan the QR code to visit your URL</p>
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

      {/* Notice Widget */}
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

export default QRCodeDisplay

