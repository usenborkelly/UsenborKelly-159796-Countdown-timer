document.addEventListener("DOMContentLoaded", function() {
  const currentDate = new Date();

  console.log(currentDate)


  const deadline = new Date(2024, 2, 5, 11, 30, 0);


  function calculateTimeRemaining() {
      const currentTime = new Date();
      const timeDifference = deadline - currentTime;


      if (timeDifference <= 0) {
          document.querySelector('.timer').innerHTML = `<div class="expired-message">The deadline has passed.</div>`;
          return;
      }
    
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.querySelector('.days').textContent = `${days} DAYS`;
      document.querySelector('.hours').textContent = `${hours} HOURS`;
      document.querySelector('.minutes').textContent = `${minutes} MINS`;
      document.querySelector('.seconds').textContent = `${seconds} SECS`;

      requestAnimationFrame(calculateTimeRemaining);
  }


  calculateTimeRemaining();
});
