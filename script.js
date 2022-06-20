navigator.getBattery().then(function(battery){
	function updateAllBatteryInfo(){
		updateChargeInfo();
		updateLevelInfo();
		updateChargingInfo();
		updateDischargingInfo();
	}

	updateAllBatteryInfo();

	battery.addEventListener('chargingchange', function(){
		updateChargeInfo();
	});

	function updateChargeInfo(){
		console.log(battery.charging);
		if (battery.charging) {
			document.querySelector('#status').innerHTML = 'Заряжается';
			document.querySelector('#battery-level').classList.add('battery-animation');
		} else {
			document.querySelector('#status').innerHTML = 'Разряжается';
			document.querySelector('#battery-level').classList.remove('battery-animation');
		}
	}

	battery.addEventListener('levelchange', updateLevelInfo);
	function updateLevelInfo(){
		console.log(battery.level)
		document.querySelector('#battery-level-digit').innerHTML = battery.level * 100 + '%';
		document.querySelector('#battery-level').style.width = battery.level * 100 + '%';
	}

	battery.addEventListener('chargintimechange', updateChargingInfo);

	function updateChargingInfo(){
		console.log('charging' + battery.chargingTime);
		document.querySelector('#charging-time').innerHTML = battery.chargingTime;
	}

	battery.addEventListener('dischargintimechange', updateDischargingInfo);

	function updateDischargingInfo(){
		console.log('dis' + battery.dischargingTime);
		document.querySelector('#discharging-time').innerHTML = battery.dischargingTime;
	}

})