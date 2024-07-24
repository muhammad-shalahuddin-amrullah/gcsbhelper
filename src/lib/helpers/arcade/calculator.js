import dbSkillbg from '$lib/data/skill-badges.json';
import dbGames from '$lib/data/games.json';
import { arcadeDate } from '../dateTime';

const badges = [...dbGames];
Object.keys(dbSkillbg).forEach((key) => {
	dbSkillbg[key].forEach((data) => {
		data.group = key;
		badges.push(data);
	});
});

const filterByDate = (data = []) => {
	const filtered = data.filter(({ date }) => {
		const earnedDate = new Date(date);
		const badgeValid = arcadeDate.start <= earnedDate && arcadeDate.end >= earnedDate;
		return badgeValid;
	});
	return filtered;
};

export const pointCounter = (data = []) => {
	// const inPeriode = filterByDate(data);
	const bonusDateStart = new Date('22 July 2024, GMT+7');
	const bonusDateEnd = new Date('31 July 2024, GMT+7 ');
	const pointList = data.map(({ courseID, date }) => {
		const db = badges.find(({ courseID: id }) => id === courseID);
		if (!db) return 0;
		const earnedDate = new Date(date);
		const hasBonus = bonusDateStart <= earnedDate && bonusDateEnd >= earnedDate;
		const { type } = db;
		if (type === 'skill' && hasBonus) return 1;
		if (/(game|arcade|trivia)/.test(type)) return 1;
		return 0.5;
	});
	const total = pointList.reduce((pv = 0, cur) => (pv || 0) + cur);
	return total;
};
