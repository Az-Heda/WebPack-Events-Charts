export const prodMode = false;
export const DEFAULT_COLORS = [
	...['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
	...['#662E9B', '#EA3546', '#F86624', '#F9C80E', '#43BCCD'].reverse(),
];

export function clearOnceEvents(...params) {
	const events = MyEvent.events;
	const onceEvents = events.filter((e) => { return e.startsWith('ONCE_')});
	for (let x = 0; x < onceEvents.length; x ++) {
		MyEvent.emit(onceEvents[x], ...params);
		let keys = MyEvent.getIDSFromEvent(onceEvents[x]);
		keys.forEach((k) => { MyEvent.unbind(k, onceEvents[x]); })
	}
}

export function hashSeed (s, seed = 0) {
	let h1 = 0xdeadbeef ^ seed;
	let h2 = 0x41c6ce57 ^ seed;
	for (let i = 0, ch; i < s.length; i++) {
		ch = s.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761)
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
	h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
	h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export function getColor(text=null, single=false) {
	if (text === null) {
		text = document.getElementById('searchbar').value;
	}
	if (DEFAULT_COLORS.length > 10) DEFAULT_COLORS.splice(10)
	const h = hashSeed(text, 1);
	const m = h % DEFAULT_COLORS.length;
	const c = DEFAULT_COLORS[m];
	// console.log({ h, c, m, DEFAULT_COLORS })
	return (single) ? c : [c];
}

export function filterPIE(data, val=5) {
	const sum = (...vals) => {
		let t = 0;
		vals.forEach((v) => { t += v});
		return t;
	}
	const isPerc = (typeof val == 'string');
	let validValues = [];
	if (isPerc) {
		if (/[0-9.]{1,100}%/.exec(val) === null) {
			throw new Error(`Percentage "${val}" written in wrong format; Examples: ${['1%', '10%', '15.5%'].join(', ')}`);
		}
		let perc = /[0-9.]{1,100}/.exec(val)[0] * 1;
		data.sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0 );
		const tot = sum(...data.map((i) => { return i.y}));
		const getPerc = function(val, tot) { return val * 100 / tot; };
	
		validValues = data.map((item) => {
			item.perc = getPerc(item.y, tot);
			return item;
		})
		.filter((i) => { return i.perc >= perc});
	
		if (sum(...data.filter((item) => { return item.perc < perc}).map((e) => { return e.y})) > 0) {
			validValues.push({ x: 'Altri', y: sum(...data.filter((item) => { return item.perc < perc}).map((e) => { return e.y})) });	
		}
	
		validValues = validValues.map((item) => {
			if (item?.perc) delete item.perc;
			return item;
		});
	}
	else {
		let n = val;
		validValues = data.filter((_, i) => { return i < n});
		if (sum(...data.filter((_, i) => { return i >= n}).map((e) => { return e.y})) > 0) {
			validValues.push({ x: 'Altri', y: sum(...data.filter((_, i) => { return i >= n}).map((e) => { return e.y}))})
		}
	}
	return validValues;
}

export function mapNumber(n, start1, stop1, start2, stop2) {
	return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}


export async function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms, ms);
	})
}