"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import * as Tabs from "@radix-ui/react-tabs"
import * as Toast from "@radix-ui/react-toast"
import * as Separator from "@radix-ui/react-separator"
import { QrCode, Copy, X, Info, Check , ScanLine} from "lucide-react"

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
    <><Separator.Root
      className="bg-slate-200 data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[1px]"
      orientation="vertical" /><div className="w-full md:w-80 p-6 bg-gray-50 border-w flex flex-col">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold text-gray-900">Verification QR</h2>
          <p className="text-sm text-gray-500">Scan to verify your identity</p>
        </div>

        <div className="bg-gray-50 border rounded-lg p-6 flex items-center justify-center mb-4 aspect-square">
          <div className="flex flex-col items-center justify-center">
            <ScanLine size={180} className="text-slate-800" />
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
              readOnly />
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Info size={20} className="text-blue-600" />
              Instructions
            </h3>
            <p className="text-sm text-gray-600">
              Scan the QR code with your mobile device to start the verification process. Follow the on-screen
              instructions to complete your verification.
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="w-full px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-blue-700 transition-colors">
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
      </div></>
  )
}

export default QRCodeDisplay;

