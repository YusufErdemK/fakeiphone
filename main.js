const notch = document.getElementById('dynamic-notch');
        const phone = document.getElementById('phone');
        const timeEl = document.getElementById('time');
        const dateEl = document.getElementById('date');
        const batteryPrs = document.getElementById('battery-prs');
        const batteryIcon = document.getElementById('battery-icon');

        function syncTimeDate() {
            const now = new Date();

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeEl.textContent = `${hours}:${minutes}`;

            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            dateEl.textContent = now.toLocaleDateString('en-US', options);
        }

        let batteryLevel = 100;
        function updateBattery() {
            batteryPrs.textContent = `${batteryLevel}%`;
            if (batteryLevel > 60) {
                batteryIcon.style.color = 'limegreen';
                batteryIcon.className = 'fa-solid fa-battery-full';
            } else if (batteryLevel > 30) {
                batteryIcon.style.color = 'gold';
                batteryIcon.className = 'fa-solid fa-battery-half';
            } else {
                batteryIcon.style.color = 'red';
                batteryIcon.className = 'fa-solid fa-battery-quarter';
            }

            batteryLevel -= 1;
            if (batteryLevel < 0) batteryLevel = 100;
        }


        setInterval(syncTimeDate, 1000);
        setInterval(updateBattery, 10000);
        syncTimeDate();
        updateBattery();

        // BAŞARDIM FOKSİYON ÇALIŞIYOR PUHAHAHAHAHAHAHAHAHAHAHAHAHAHA

        console.log(`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++o00000ooooooo\`
         ./ooosssso++osssssso\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 /\`
`);