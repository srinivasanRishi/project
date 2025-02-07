document.addEventListener("DOMContentLoaded", function () {
    const jobs = [
        { title: "Web Developer", description: "Frontend developer needed." },
        { title: "Graphic Designer", description: "Create stunning visuals." }
    ];

    // Populate Featured Jobs
    let featuredJobs = document.getElementById("featured-jobs");
    if (featuredJobs) {
        jobs.forEach(job => {
            let li = document.createElement("li");
            li.innerHTML = <strong>${job.title}</strong>: ${job.description};
            featuredJobs.appendChild(li);
        });
    }

    // Populate Job Listings
    let jobList = document.getElementById("job-listings");
    if (jobList) {
        jobs.forEach(job => {
            let li = document.createElement("li");
            li.innerHTML = <strong>${job.title}</strong> - <a href="job-detail.html">View</a>;
            jobList.appendChild(li);
        });
    }

    // Job Search
    window.searchJobs = function () {
        let input = document.getElementById("search-bar").value.toLowerCase();
        let filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(input));
        jobList.innerHTML = "";
        filteredJobs.forEach(job => {
            let li = document.createElement("li");
            li.innerHTML = <strong>${job.title}</strong> - <a href="job-detail.html">View</a>;
            jobList.appendChild(li);
        });
    };

    // Job Posting
    let postForm = document.getElementById("post-job-form");
    if (postForm) {
        postForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let newJob = {
                title: document.getElementById("job-title").value,
                description: document.getElementById("job-description").value
            };
            jobs.push(newJob);
            alert("Job posted successfully!");
        });
    }

    // Job Application
    let applyForm = document.getElementById("application-form");
    if (applyForm) {
        applyForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Application submitted successfully!");
        });
    }
});