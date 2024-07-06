// Navbar
$(document).ready(function () {
	if (window.innerWidth < 769) {
		$("#navbar").hide();
	}

	$("#menu-toggle").click(function () {
		$("#navbar").toggle("hidden");
		console.log("navbar is show");
	});

	// auto hide
	$(".nav-item").click(function () {
		console.log("nabar is hidden");
		$("#navbar").hide();
	});

	// Hide navbar
	window.addEventListener("resize", (e => {
		var width = $(window).width();
		if (width > 769) {
			$("#navbar").hide();
			console.log("width 768");
		}
	}))
});

// Scrol
function topfunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Pages
document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.nav-item');
	const sections = document.querySelectorAll('.division');

	links.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			// Remove active class from all links
			links.forEach(link => link.classList.remove('active'));

			// Add active class to the clicked link
			this.classList.add('active');

			// Get the target section id
			const targetId = this.getAttribute('href').substring(1);

			// Remove active class from all sections
			sections.forEach(section => section.classList.remove('active'));

			// Add active class to the target section
			document.getElementById(targetId).classList.add('active');

			const targetSection = document.getElementById(targetId);
			if (targetSection) {
				targetSection.classList.add("active");

				// Update URL hash without reloading the page
				history.pushState(null, null, `#${targetId}`);
			}
		});
	});
});

// Animation
$("#menu-toggle").click(function(){
	$("#navbar").slideToggle()();
	$("#navbar").slideToggle()("slow");
	$("#navbar").slideToggle()(3000);
  });
