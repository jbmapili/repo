import React, { Component } from 'react';
import Picture from './Picture'
import Details from './Details'
import Image from './Image'

class Navigation extends Component {
	constructor(props) {
		super(props)
	  	this.state = {
	  		data: [{"mangaId":"a-trail-of-blood","name":"A Trail of Blood"},{"mangaId":"air-gear","name":"Air Gear"},{"mangaId":"akame-ga-kill","name":"Akame Ga Kill"},{"mangaId":"akatsuki-no-yona","name":"Akatsuki no Yona"},{"mangaId":"all-out--","name":"All Out!!"},{"mangaId":"area-d","name":"Area D"},{"mangaId":"assassination-classroom","name":"Assassination Classroom"},{"mangaId":"attack-on-titan","name":"Attack on Titan"},{"mangaId":"attack-on-titan---before-the-fall","name":"Attack On Titan - Before The Fall"},{"mangaId":"berserk","name":"Berserk"},{"mangaId":"billy-bat","name":"Billy Bat"},{"mangaId":"black-butler","name":"Black Butler"},{"mangaId":"black-clover","name":"Black Clover"},{"mangaId":"black-lagoon","name":"Black Lagoon"},{"mangaId":"bleach","name":"Bleach"},{"mangaId":"boruto","name":"Boruto"},{"mangaId":"cage-of-eden","name":"Cage of Eden"},{"mangaId":"claymore","name":"Claymore"},{"mangaId":"d-gray-man","name":"D.Gray-man"},{"mangaId":"deadman-wonderland","name":"Deadman Wonderland"},{"mangaId":"demon-prince-poro-s-diaries","name":"Demon Prince Poro's Diaries"},{"mangaId":"demon-s-plan","name":"Demon's Plan"},{"mangaId":"downfall","name":"Downfall"},{"mangaId":"dr--stone","name":"Dr. Stone"},{"mangaId":"dragon-ball---episode-of-bardock","name":"Dragon Ball - Episode of Bardock"},{"mangaId":"dragon-ball-minus","name":"Dragon Ball Minus"},{"mangaId":"dragon-ball-sd","name":"Dragon Ball SD"},{"mangaId":"dragon-ball-super","name":"Dragon Ball Super"},{"mangaId":"dragon-ball-z-rebirth-of-f","name":"Dragon Ball Z Rebirth of F"},{"mangaId":"eureka-seven--astral-ocean","name":"Eureka Seven: Astral Ocean"},{"mangaId":"fairy-tail","name":"Fairy Tail"},{"mangaId":"fairy-tail--special","name":"Fairy Tail: Special"},{"mangaId":"fairy-tail-ice-trail","name":"Fairy Tail Ice Trail"},{"mangaId":"fairy-tail-sabertooth","name":"Fairy Tail Sabertooth"},{"mangaId":"fairy-tail-zero","name":"Fairy Tail Zero"},{"mangaId":"fire-brigade-of-flames","name":"Fire Brigade of Flames"},{"mangaId":"gantz-g","name":"GANTZ:G"},{"mangaId":"green-blood","name":"Green Blood"},{"mangaId":"haikyuu--","name":"Haikyuu!!"},{"mangaId":"hajime-no-ippo","name":"Hajime no Ippo"},{"mangaId":"happiness","name":"Happiness"},{"mangaId":"history-s-strongest-disciple-kenichi","name":"History's Strongest Disciple Kenichi"},{"mangaId":"hungry-marie","name":"Hungry Marie"},{"mangaId":"hunter-x-hunter","name":"Hunter x Hunter"},{"mangaId":"jaco-the-galactic-patrolman","name":"Jaco the Galactic Patrolman"},{"mangaId":"jagaaaaaan","name":"Jagaaaaaan"},{"mangaId":"katekyo-hitman-reborn-","name":"Katekyo Hitman Reborn!"},{"mangaId":"kuroko-no-basket---extra-game","name":"Kuroko no Basket - Extra Game"},{"mangaId":"mahouka-koukou-no-rettousei---nine-schools-competition-arc","name":"Mahouka Koukou no Rettousei - Nine Schools Competition Arc"},{"mangaId":"manga-of-the-dead","name":"Manga of the Dead"},{"mangaId":"monster-x-monster","name":"Monster X Monster"},{"mangaId":"my-hero-academia","name":"My Hero Academia"},{"mangaId":"naruto","name":"Naruto"},{"mangaId":"new-prince-of-tennis","name":"New Prince of Tennis"},{"mangaId":"nisekoi","name":"Nisekoi"},{"mangaId":"one-piece","name":"One Piece"},{"mangaId":"one-piece-party","name":"One Piece Party"},{"mangaId":"one-punch-man","name":"One-Punch Man"},{"mangaId":"one-shot","name":"One Shot"},{"mangaId":"platinum-end","name":"Platinum End"},{"mangaId":"remember","name":"ReMember"},{"mangaId":"rikudo","name":"Rikudo"},{"mangaId":"robot-x-laserbeam","name":"Robot x Laserbeam"},{"mangaId":"rock-lee-s-springtime-of-youth","name":"Rock Lee's Springtime of Youth"},{"mangaId":"rurouni-kenshin","name":"Rurouni Kenshin"},{"mangaId":"rurouni-kenshin--restoration","name":"Rurouni Kenshin: Restoration"},{"mangaId":"rwby","name":"RWBY"},{"mangaId":"sahara-the-flower-samurai","name":"Sahara the Flower Samurai"},{"mangaId":"shaman-king-zero","name":"Shaman King Zero"},{"mangaId":"shokugeki-no-souma","name":"Shokugeki no Souma"},{"mangaId":"silver-spoon","name":"Silver Spoon"},{"mangaId":"skip-beat-","name":"Skip Beat!"},{"mangaId":"smokin--parade","name":"Smokin' Parade"},{"mangaId":"soul-eater","name":"Soul Eater"},{"mangaId":"steins-gate","name":"Steins;Gate"},{"mangaId":"sukedachi-nine","name":"Sukedachi Nine"},{"mangaId":"terra-formars","name":"Terra Formars"},{"mangaId":"the-heroic-legend-of-arslan","name":"The Heroic Legend of Arslan"},{"mangaId":"the-memorandum-of-kyoko-okitegami","name":"The Memorandum of Kyoko Okitegami"},{"mangaId":"the-promised-neverland","name":"The Promised Neverland"},{"mangaId":"the-seven-deadly-sins","name":"The Seven Deadly Sins"},{"mangaId":"the-seven-deadly-sins---seven-days","name":"The Seven Deadly Sins - Seven Days"},{"mangaId":"the-uchiha-sasuke-sharingan-chronicles","name":"The Uchiha Sasuke Sharingan Chronicles"},{"mangaId":"tokyo-ghoul-re","name":"Tokyo Ghoul:re"},{"mangaId":"toriko","name":"Toriko"},{"mangaId":"u19","name":"U19"},{"mangaId":"ubel-blatt","name":"Ubel Blatt"},{"mangaId":"vigilante---my-hero-academia-illegals","name":"Vigilante - My Hero Academia Illegals"},{"mangaId":"vinland-saga","name":"Vinland Saga"},{"mangaId":"we-can-t-study-","name":"We Can't Study!"},{"mangaId":"weekly-shonen-jump-author-comments","name":"Weekly Shonen Jump Author Comments"},{"mangaId":"world-trigger","name":"World Trigger"},{"mangaId":"yotsuba--","name":"Yotsuba&!"}],
	  		index: 0
	  	}
	}
  render() {
    return (
    	<div>
      		<div className="Navigation">
      			{this.state.data.map((manga) => 
      				<div>
	      				<Image manga={manga.mangaId} title={manga.name}/>
	      			</div>
      			)}
      		</div>
      		<Picture/>
      		<Details/>
		</div>
    );
  }
}

export default Navigation;