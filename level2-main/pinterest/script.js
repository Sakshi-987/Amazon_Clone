document.querySelectorAll("#home, #explore, #create").forEach(function(el) {
    el.addEventListener("mouseenter", function() {
        el.style.color = "red";
    });
    el.addEventListener("mouseleave", function() {
        el.style.color = "black";
    });
});

var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "people", image: "https://images.unsplash.com/photo-1754770584877-73ba9341671c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"},
    {name: "architect", image: "https://images.unsplash.com/photo-1592106163564-ff2e75907459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww"},
    {name: "travel", image: "https://plus.unsplash.com/premium_photo-1676120651720-374f3f499c5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},
    {name: "bolllywood", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWN0b3J8ZW58MHx8MHx8fDA%3D"},
    {name: "photography", image: "https://images.unsplash.com/photo-1754608263938-4e9210c5327e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"},
    {name: "street", image:"https://images.unsplash.com/photo-1754687016801-2505d2c226e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "country", image: "https://images.unsplash.com/photo-1564407727371-3eece6c58961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFuYnVsfGVufDB8fDB8fHww"},
    {name: "paris", image: "https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmlzfGVufDB8fDB8fHww"}
];

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
            <div class="image-wrapper">
                <img class="cursor-pointer" src="${obj.image}" alt="${obj.name}">
                <button class="save-btn">Save</button>
            </div>
            <div class="caption">${obj.name}</div>
        </div>`;
    });

    document.querySelector(".container").innerHTML = clutter;

    document.querySelectorAll('.image-wrapper img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('modalImage').src = this.src;
            document.getElementById('imageModal').classList.remove('hidden');
            document.getElementById('imageModal').classList.add('flex');
        });
    });
}


let recentSearches = [];

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    var popup = document.createElement("div");
    popup.classList.add("search-popup");
    popup.style.position = "absolute";
    popup.style.top = "50px";
    popup.style.left = "20px";
    popup.style.background = "#fff";
    popup.style.border = "1px solid #ccc";
    popup.style.padding = "10px";
    popup.style.borderRadius = "8px";
    popup.style.width = "250px";
    popup.style.display = "none";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    document.body.appendChild(popup);
    input.addEventListener("blur", function(){
        setTimeout(()=> popup.style.display = "none", 200);
    });

    input.addEventListener("input", function(){
        const value = input.value.toLowerCase();
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(value));
        updatePopup(filteredArray, value);
    });

    function updatePopup(results = [], query = ""){
        let html = "";
        if(query){
            html += `<div style="font-weight:bold;margin-bottom:5px;">Results</div>`;
            results.forEach(obj => {
                html += `<div class="search-item" style="padding:5px 0;border-bottom:1px solid #eee;">${obj.name}</div>`;
            });
        } else {
            html += `<div style="font-weight:bold;margin-bottom:5px;">Recent Searches</div>`;
            if(recentSearches.length === 0){
                html += `<div style="color:#777;">No recent searches</div>`;
            } else {
                recentSearches.forEach(item => {
                    html += `<div class="search-item" style="padding:5px 0;border-bottom:1px solid #eee;">${item}</div>`;
                });
            }
        }
        popup.innerHTML = html;

        popup.querySelectorAll(".search-item").forEach(item => {
            item.addEventListener("click", () => {
                input.value = item.textContent;
                if(!recentSearches.includes(item.textContent)){
                    recentSearches.unshift(item.textContent);
                    if(recentSearches.length > 5) recentSearches.pop();
                }
                popup.style.display = "none";
            });
        });
    }
}


handleSearchFunctionality();
showTheCards();

document.getElementById('closeModal').addEventListener('click', function(){
    document.getElementById('imageModal').classList.add('hidden');
    document.getElementById('imageModal').classList.remove('flex');
});
