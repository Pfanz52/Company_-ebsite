// Dropdown menu toggle
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Slider auto change (nếu có slider hình ảnh)
let currentIndex = 0;
const sliderImages = document.querySelectorAll('.slider img');
setInterval(() => {
    sliderImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImages[currentIndex].classList.add('active');
}, 3000);

// Load employee data using AJAX
fetch('data/employees.json')
    .then(response => response.json())
    .then(data => {
        const employeeList = document.getElementById('employee-list');
        data.forEach(employee => {
            let listItem = document.createElement('li');
            listItem.textContent = `${employee.name} - ${employee.position}`;
            employeeList.appendChild(listItem);
        });
    });
