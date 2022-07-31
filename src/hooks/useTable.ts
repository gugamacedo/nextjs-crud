import { useState } from "react"

export default function useTable() {
  const [isTable, setTable] = useState(true)

  const showTable = () => setTable(true)
  const hideTable = () => setTable(false)

  return {
    isTable,
    showTable,
    hideTable
  }
}