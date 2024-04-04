 

   /* Function to open the overlay */
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    }

    /* Function to close the overlay */
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
	document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('isVisible');
            } else {
                // Optionally, you can remove the class if the element goes out of view
                // entry.target.classList.remove('isVisible');
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold value based on your needs

    document.querySelectorAll('.tipsgrid-container > div').forEach(div => {
        observer.observe(div);
    });
});
function animateNumbers() {
    let counters = document.querySelectorAll('.numbers');

    counters.forEach(counter => {
        let target = +counter.getAttribute('data-count');
        let count = 0;
        let speed = 50; // Adjust animation speed (lower is faster)
        let increment = Math.ceil(target / speed); // Increment by 1 or more for faster animation

        let updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = count; // Assuming you want to append '%' for percentage values
                setTimeout(updateCount, 10); // Adjust timeout for smoother animation
            } else {
                counter.innerText = target; // Ensure the final value is correctly displayed with '%'
            }
        };

        updateCount();
    });
}

// Define the scroll event listener as a separate function so it can be removed later
function onScrollAnimate() {
    let factcardsContainer = document.querySelector('.factcards-container');
    let factcardsContainerPosition = factcardsContainer.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5; // Adjust this ratio to start animation earlier/later

    if (factcardsContainerPosition < screenPosition) {
        animateNumbers();
        // Correctly remove the event listener
        window.removeEventListener('scroll', onScrollAnimate);
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', onScrollAnimate);

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust if necessary; 0.1 means 10% of the item's height must be visible
  });

  document.querySelectorAll('.content-block').forEach(block => {
    observer.observe(block);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust based on when you want the sections to start appearing
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});

    /* Function to open the overlay */
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    }

    /* Function to close the overlay */
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
	document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('isVisible');
            } else {
                // Optionally, you can remove the class if the element goes out of view
                // entry.target.classList.remove('isVisible');
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold value based on your needs

    document.querySelectorAll('.tipsgrid-container > div').forEach(div => {
        observer.observe(div);
    });
});



// Define the scroll event listener as a separate function so it can be removed later
function onScrollAnimate() {
    let factcardsContainer = document.querySelector('.factcards-container');
    let factcardsContainerPosition = factcardsContainer.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5; // Adjust this ratio to start animation earlier/later

    if (factcardsContainerPosition < screenPosition) {
        animateNumbers();
        // Correctly remove the event listener
        window.removeEventListener('scroll', onScrollAnimate);
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', onScrollAnimate);

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust if necessary; 0.1 means 10% of the item's height must be visible
  });

  document.querySelectorAll('.content-block').forEach(block => {
    observer.observe(block);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust based on when you want the sections to start appearing
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});
