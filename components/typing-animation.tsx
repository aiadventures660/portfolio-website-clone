"use client"
import { useState, useEffect } from "react"

export function TypingAnimation({
  words = ["App Devel"],
  typingSpeed = 200,
  deletingSpeed = 200,
  pauseDuration = 3000,
  fontSize = 48,
  fontWeight = "500",
  textColor = "var(--brand)",
  cursorColor = "var(--brand)",
  cursorHeightFactor = 0.8,
  cursorWidth = 2,
}: {
  words?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  fontSize?: number
  fontWeight?: string
  textColor?: string
  cursorColor?: string
  cursorHeightFactor?: number
  cursorWidth?: number
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [reverseDeletingIndex, setReverseDeletingIndex] = useState(0)

  useEffect(() => {
    if (!words || words.length === 0) {
      console.error("The 'words' array is empty or undefined.")
      return
    }

    const word = words[currentWordIndex]
    let timer

    if (isDeleting) {
      if (reverseDeletingIndex < word.length) {
        setDisplayedText(word.substring(0, word.length - reverseDeletingIndex - 1))
        timer = setTimeout(() => {
          setReverseDeletingIndex((prevIndex) => prevIndex + 1)
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setReverseDeletingIndex(0)
        setCurrentLetterIndex(0)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      }
    } else {
      if (currentLetterIndex < word.length) {
        setDisplayedText(word.substring(0, currentLetterIndex + 1))
        timer = setTimeout(() => {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1)
        }, typingSpeed)
      } else {
        setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    }

    return () => clearTimeout(timer)
  }, [
    displayedText,
    isDeleting,
    currentLetterIndex,
    reverseDeletingIndex,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  return (
    <div
      className="relative inline-block"
      style={{
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        color: textColor,
        minWidth: "300px", // Ensure minimum width for longer text
        minHeight: `${fontSize * 1.2}px`, // Ensure minimum height
      }}
    >
      <span>{displayedText}</span>
      <span
        className="inline-block ml-1 animate-pulse"
        style={{
          backgroundColor: cursorColor,
          width: `${cursorWidth}px`,
          height: `${fontSize * cursorHeightFactor}px`,
          animation: "blink 1s step-start infinite",
        }}
      />
      <style jsx>{`
                @keyframes blink {
                    50% { opacity: 0; }
                }
            `}</style>
    </div>
  )
}
