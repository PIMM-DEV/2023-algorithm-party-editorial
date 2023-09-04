// ==UserScript==
// @name         Baekjoon Contest Grading Status Getter
// @namespace    https://github.com/ShapeLayer
// @version      0.1
// @description  Baekjoon contest grading status getter
// @author       ShapeLayer
// @match        https://www.acmicpc.net/status?contest_id=1095*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=acmicpc.net
// @run-at       document-idle
// ==/UserScript==

'use strict'

const getTableRows = () => {
  const rows = []
  const table = document.querySelector('#status-table')
  for (const each of table.getElementsByTagName('tr')) {
    if (each.id === '') continue
    const row = [
      each.cells[0].innerText,
      each.cells[1].innerText,
      each.cells[2].innerText,
      each.cells[3].innerText,
      each.cells[4].innerText,
      each.cells[5].innerText,
      each.cells[6].innerText.split('/')[0].trim(),
      each.cells[7].innerText,
      each.cells[8].getElementsByTagName('a')[0].dataset.timestamp
    ]
    rows.push(row)
  }
  return rows
}

const savePageData = () => {
  const rows = getTableRows()
  savePlainText(`${rows[0][0]}.txt`, JSON.stringify(rows))
}

const moveNextPage = () => {
  const nextPage = document.getElementById('next_page')
  if (nextPage !== null) {
    const link = nextPage.href
    window.location.href = link
  } else {
    invokeEndPage()
  }
}

const invokeEndPage = () => {
  
}

const clearData = () => {
  const prevPage = document.getElementById('prev-page')
  if (prevPage === null) {
    // GM_setValue('boj-status', '[]')
  }
}

const savePlainText = (filename, content) => {
  const blob = new Blob([content], {type: 'text; charset=utf-8;'})
  const link = document.createElement('a')
  link.setAttribute('href', URL.createObjectURL(blob))
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const pageQuery = () => {
  clearData()
  savePageData()
  moveNextPage()
}

(() => {
  pageQuery()
})()
