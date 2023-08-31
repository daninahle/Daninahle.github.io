/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function () {
    const projectSets = $('.item-list'); // Select all sets of project cards
    const itemsPerPage = 1; // Display one set of project cards per page
    let currentPage = 0;

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        projectSets.hide(); // Hide all sets of project cards
        projectSets.slice(startIndex, endIndex).show(); // Show only the set of cards for the current page
    }

    function updatePagination() {
        const totalPages = Math.ceil(projectSets.length / itemsPerPage);
        const paginationList = $('.pagination');
        paginationList.empty();
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = `<li class="page-number">${i}</li>`;
            paginationList.append(pageLink);
        }
        $('.page-number').click(function () {
            currentPage = $(this).text() - 1;
            showPage(currentPage);
            updatePaginationButtons();
        });
    }

    function updatePaginationButtons() {
        $('.page-number').removeClass('active');
        $('.page-number').eq(currentPage).addClass('active');
    }

    showPage(currentPage);
    updatePagination();
    updatePaginationButtons();
});

function openNew(pdfUrl){
    window.open(pdfUrl, '_blank');
}