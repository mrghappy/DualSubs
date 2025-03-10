/*
README:https://github.com/DualSubs/DualSubs/
*/

const $ = new Env("DualSubs v0.2.2-netflix-manifest-beta");
const URL = new URLs();

const DataBase = {
	"Verify": {
		"Settings":{"GoogleCloud":{"Method":"Part","Mode":"Key","Auth":null},"Azure":{"Method":"Part","Version":"Azure","Region":null,"Mode":"Key","Auth":null},"DeepL":{"Method":"Part","Version":"Free","Auth":null}}
	},
	"Advanced": {
		"Settings":{"Translator":{"Times":3,"Interval":100,"Exponential":true}}
	},
	"Default": {
		"Settings":{"Switch":true,"Types":["Official","Google","GoogleCloud","Azure","DeepL"],"Type":"Google","Languages":["ZH","EN"],"Language":"ZH","External":{"URL":null,"Offset":0,"ShowOnly":false},"Position":"Forward","CacheSize":6,"Tolerance":1000},
		"Configs": {
			"Languages":{"AUTO":"","AR":["ar","ar-001"],"BG":["bg","bg-BG","bul"],"CS":["cs","cs-CZ","ces"],"DA":["da","da-DK","dan"],"DE":["de","de-DE","deu"],"EL":["el","el-GR","ell"],"EN":["en","en-US","eng","en-GB","en-UK","en-CA","en-US SDH"],"EN-CA":["en-CA","en","eng"],"EN-GB":["en-UK","en","eng"],"EN-US":["en-US","en","eng"],"EN-US SDH":["en-US SDH","en-US","en","eng"],"ES":["es","es-419","es-ES","spa","es-419 SDH"],"ES-419":["es-419","es","spa"],"ES-419 SDH":["es-419 SDH","es-419","es","spa"],"ES-ES":["es-ES","es","spa"],"ET":["et","et-EE","est"],"FI":["fi","fi-FI","fin"],"FR":["fr","fr-CA","fr-FR","fra"],"FR-CA":["fr-CA","fr","fra"],"FR-DR":["fr-FR","fr","fra"],"HU":["hu","hu-HU","hun"],"ID":["id","id-id"],"IT":["it","it-IT","ita"],"JA":["ja","ja-JP","jpn"],"KO":["ko","ko-KR","kor"],"LT":["lt","lt-LT","lit"],"LV":["lv","lv-LV","lav"],"NL":["nl","nl-NL","nld"],"NO":["no","nb-NO","nor"],"PL":["pl","pl-PL"],"PT":["pt","pt-PT","pt-BR","por"],"PT-PT":["pt-PT","pt","por"],"PT-BR":["pt-BR","pt","por"],"RO":["ro","ro-RO","ron"],"RU":["ru","ru-RU","rus"],"SK":["sk","sk-SK","slk"],"SL":["sl","sl-SI","slv"],"SV":["sv","sv-SE","swe"],"IS":["is","is-IS","isl"],"ZH":["zh","cmn","zho","zh-CN","zh-Hans","cmn-Hans","zh-TW","zh-Hant","cmn-Hant","zh-HK","yue-Hant","yue"],"ZH-CN":["zh-CN","zh-Hans","cmn-Hans","zho"],"ZH-HANS":["zh-Hans","cmn-Hans","zh-CN","zho"],"ZH-HK":["zh-HK","yue-Hant","yue","zho"],"ZH-TW":["zh-TW","zh-Hant","cmn-Hant","zho"],"ZH-HANT":["zh-Hant","cmn-Hant","zh-TW","zho"],"YUE":["yue","yue-Hant","zh-HK","zho"],"YUE-HK":["yue-Hant","yue","zh-HK","zho"]}
		}
	},
	"YouTube": {
		"Configs": {
			"Languages":{"BG":"bg-BG","CS":"cs","DA":"da-DK","DE":"de","EL":"el","EN":"en","EN-GB":"en-GB","EN-US":"en-US","EN-US SDH":"en-US SDH","ES":"es","ES-419":"es-419","ES-ES":"es-ES","ET":"et-EE","FI":"fi","FR":"fr","HU":"hu-HU","ID":"id","IT":"it","JA":"ja","KO":"ko","LT":"lt-LT","LV":"lv-LV","NL":"nl-NL","NO":"nb-NO","PL":"pl-PL","PT":"pt","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro-RO","RU":"ru-RU","SK":"sk-SK","SL":"sl-SI","SV":"sv-SE","IS":"is-IS","ZH":"zh","ZH-HANS":"zh-Hans","ZH-HK":"zh-Hant-HK","ZH-HANT":"zh-Hant","ZH-TW":"zh-TW","YUE":"yue","YUE-HK":"yue-HK"}
		}
	},
	"Netflix": {
		"Configs": {
			"Languages":{"AR":"ar","CS":"cs","DA":"da","DE":"de","EN":"en","EN-GB":"en-GB","EN-US":"en-US","EN-US SDH":"en-US SDH","ES":"es","ES-419":"es-419","ES-ES":"es-ES","FI":"fi","FR":"fr","HE":"he","HR":"hr","HU":"hu","ID":"id","IT":"it","JA":"ja","KO":"ko","MS":"ms","NB":"nb","NL":"nl","PL":"pl","PT":"pt","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro","RU":"ru","SV":"sv","TH":"th","TR":"tr","UK":"uk","VI":"vi","IS":"is","ZH":"zh","ZH-HANS":"zh-Hans","ZH-HK":"zh-HK","ZH-HANT":"zh-Hant"}
		}
	},
	"Google": {
		"Configs": {
			"Languages":{"AUTO":"","AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN":"en","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES":"es","ES-419":"es","ES-ES":"es","ET":"et","FI":"fi","FR":"fr","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT":"pt","PT-PT":"pt","PT-BR":"pt","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH":"zh","ZH-HANS":"zh-CN","ZH-HK":"zh-TW","ZH-HANT":"zh-TW"}
		}
	},
	"Microsoft": {
		"Configs": {
			"Languages":{"AUTO":"","AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN":"en","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES":"es","ES-419":"es","ES-ES":"es","ET":"et","FI":"fi","FR":"fr","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT":"pt","PT-PT":"pt","PT-BR":"pt","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH":"zh-Hans","ZH-HANS":"zh-Hans","ZH-HK":"yue","ZH-HANT":"zh-Hant"}
		}
	},
	"DeepL": {
		"Configs": {
			"Languages":{"AUTO":"","BG":"BG","CS":"CS","DA":"DA","DE":"de","EL":"el","EN":"EN-US","EN-GB":"EN-GB","EN-US":"EN-US","EN-US SDH":"EN-US","ES":"ES","ES-419":"ES","ES-ES":"ES","ET":"ET","FI":"FI","FR":"FR","HU":"HU","IT":"IT","JA":"JA","KO":"ko","LT":"LT","LV":"LV","NL":"NL","PL":"PL","PT":"PT-PT","PT-PT":"PT-PT","PT-BR":"PT-BR","RO":"RO","RU":"RU","SK":"SK","SL":"SL","SV":"SV","ZH":"ZH","ZH-HANS":"ZH","ZH-HK":"ZH","ZH-HANT":"ZH"}
		}
	}
};

if ($request.method == "OPTIONS") $.done();
if ($response.status != 200 && $response.statusCode != 200) $.done();
delete $request.headers["Host"]
delete $request.headers["Connection"]
delete $request.headers["Range"]

/***************** Processing *****************/
!(async () => {
	const { Platform, Settings, Caches, Configs } = await setENV("DualSubs", $request.url, DataBase);
	if (Settings.Switch) {
		let url = URL.parse($request.url);
		$.log(`⚠ ${$.name}, url.path=${url.path}`);
		// 设置类型
		const Type = url?.params?.dualsubs || Settings.Type;
		$.log(`🚧 ${$.name}, Type: ${Type}`, "");
		// 找缓存
		const Indices = await getCache($request.url, Type, Settings, Caches);
		let Cache = Caches?.[Indices.Index] || {};
		// 序列化JSON or 序列化M3U8
		let PlayList = JSON.parse($response.body);
		// PlayList.m3u8 URL or Netflix movieId
		Cache.ID = PlayList.result?.movieId ?? PlayList.result?.[0]?.movieId;
		$.log(`🚧 ${$.name}`, `Cache.ID = ${Cache.ID}`, "");
		// 提取数据 用遍历语法可以兼容自定义数量的语言查询
		for await (var language of Settings.Languages) {
			Cache[language] = await getMEDIA($request.url, Platform, PlayList, "subtitles", language);
			//$.log(`🚧 ${$.name}`, `Cache[${language}]`, JSON.stringify(Cache[language]), "");
		};
		// 写入缓存
		let newCaches = Caches;
		newCaches = await setCache(Indices.Index, newCaches, Cache, Settings.CacheSize);
		$.setjson(newCaches, `@DualSubs.Caches.${Platform}`);
		// 兼容性判断
		const standard = await isStandard(Platform, $request.url, $request.headers);
		// 写入选项
		PlayList = await setOptions(Platform, PlayList, Cache[Settings.Languages[0]], Cache[Settings.Languages[1]], Settings.Types, standard, Settings.Type);
		// 字符串M3U8
		PlayList = JSON.stringify(PlayList);
		$response.body = PlayList;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		if ($.isQuanX()) $.done({ headers: $response.headers, body: $response.body })
		else $.done($response)
	})

/***************** Async Function *****************/
/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/VirgilClyne/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} t - Persistent Store Key
 * @param {String} e - Platform Name
 * @param {Object} n - Default Database
 * @return {Promise<*>}
 */
async function getENV(t,e,n){let i=$.getjson(t,n),s={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((t=>t.split("="))));for(let e in t)f(s,e,t[e])}let g={...n?.Default?.Settings,...n?.[e]?.Settings,...i?.[e]?.Settings,...s},o={...n?.Default?.Configs,...n?.[e]?.Configs,...i?.[e]?.Configs},a=i?.[e]?.Caches||void 0;return"string"==typeof a&&(a=JSON.parse(a)),{Settings:g,Caches:a,Configs:o};function f(t,e,n){e.split(".").reduce(((t,i,s)=>t[i]=e.split(".").length===++s?n:t[i]||{}),t)}}

/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {String} url - Request URL
 * @param {Object} database - Default DataBase
 * @return {Promise<*>}
 */
async function setENV(name, url, database) {
	$.log(`⚠ ${$.name}, Set Environment Variables`, "");
	/***************** Verify *****************/
	const { Settings: Verify } = await getENV(name, "Verify", database);
	/***************** Advanced *****************/
	let { Settings: Advanced } = await getENV(name, "Advanced", database);
	Advanced.Translator.Times = parseInt(Advanced.Translator?.Times, 10) // BoxJs字符串转数字
	Advanced.Translator.Interval = parseInt(Advanced.Translator?.Interval, 10) // BoxJs字符串转数字
	Advanced.Translator.Exponential = JSON.parse(Advanced.Translator?.Exponential) //  BoxJs字符串转Boolean
	/***************** Platform *****************/
	const Platform = /\.apple\.com/i.test(url) ? "Apple"
		: /\.(dssott|starott)\.com/i.test(url) ? "Disney_Plus"
			: /\.(hls\.row\.aiv-cdn|akamaihd|cloudfront)\.net/i.test(url) ? "Prime_Video"
				: /\.(api\.hbo|hbomaxcdn)\.com/i.test(url) ? "HBO_Max"
					: /\.(hulustream|huluim)\.com/i.test(url) ? "Hulu"
						: /\.(cbsaavideo|cbsivideo|cbs)\.com/i.test(url) ? "Paramount_Plus"
							: /dplus-ph-/i.test(url) ? "Discovery_Plus_Ph"
								: /\.peacocktv\.com/i.test(url) ? "Peacock_TV"
									: /\.uplynk\.com/i.test(url) ? "Discovery_Plus"
										: /\.fubo\.tv/i.test(url) ? "Fubo_TV"
											: /(\.youtube|youtubei\.googleapis)\.com/i.test(url) ? "YouTube"
												: /\.(netflix\.com|nflxvideo\.net)/i.test(url) ? "Netflix"
													: "Universal"
	$.log(`🚧 ${$.name}, Set Environment Variables`, `Platform: ${Platform}`, "");
	/***************** Settings *****************/
	let { Settings, Caches = [], Configs } = await getENV(name, Platform, database);
	if (Platform == "Apple") {
		let platform = /\.itunes\.apple\.com\/WebObjects\/(MZPlay|MZPlayLocal)\.woa\/hls\/subscription\//i.test(url) ? "Apple_TV_Plus"
			: /\.itunes\.apple\.com\/WebObjects\/(MZPlay|MZPlayLocal)\.woa\/hls\/workout\//i.test(url) ? "Apple_Fitness"
				: /\.itunes\.apple\.com\/WebObjects\/(MZPlay|MZPlayLocal)\.woa\/hls\//i.test(url) ? "Apple_TV"
					: /vod-.*-aoc\.tv\.apple\.com/i.test(url) ? "Apple_TV_Plus"
						: /vod-.*-amt\.tv\.apple\.com/i.test(url) ? "Apple_TV"
							: /(hls|hls-svod)\.itunes\.apple\.com/i.test(url) ? "Apple_Fitness"
								: "Apple"
		$.log(`🚧 ${$.name}, Set Environment Variables`, `platform: ${platform}`, "");
		Settings = await getENV(name, platform, database).then(v=> v.Settings);
	};
	Settings.Switch = JSON.parse(Settings.Switch) //  BoxJs字符串转Boolean
	if (typeof Settings.Types === "string") Settings.Types = Settings.Types.split(",") // BoxJs字符串转数组
	if (Array.isArray(Settings.Types)) {
		if (!Verify.GoogleCloud.Auth) Settings.Types = Settings.Types.filter(e => e !== "GoogleCloud"); // 移除不可用类型
		if (!Verify.Azure.Auth) Settings.Types = Settings.Types.filter(e => e !== "Azure");
		if (!Verify.DeepL.Auth) Settings.Types = Settings.Types.filter(e => e !== "DeepL");
	}
	Settings.External.Offset = parseInt(Settings.External?.Offset, 10) // BoxJs字符串转数字
	Settings.External.ShowOnly = JSON.parse(Settings.External?.ShowOnly) //  BoxJs字符串转Boolean
	Settings.CacheSize = parseInt(Settings.CacheSize, 10) // BoxJs字符串转数字
	Settings.Tolerance = parseInt(Settings.Tolerance, 10) // BoxJs字符串转数字
	$.log(`🎉 ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	return { Platform, Verify, Advanced, Settings, Caches, Configs };
};

/**
 * Get Cache
 * @author VirgilClyne
 * @param {String} url - Request URL
 * @param {String} type - type
 * @param {Object} settings - settings
 * @param {Object} cache - cache
 * @return {Promise<*>}
 */
async function getCache(url, type, settings, caches = {}) {
	$.log(`⚠ ${$.name}, Get Cache`, "");
	let Indices = {};
	Indices.Index = await getIndex(url, settings, caches);
	if (Indices.Index !== -1) {
		for await (var language of settings.Languages) Indices[language] = await getDataIndex(url, Indices.Index, language)
		if (type == "Official") {
			// 修正缓存
			if (Indices[settings.Languages[0]] !== -1) {
				Indices[settings.Languages[1]] = caches[Indices.Index][settings.Languages[1]].findIndex(data => {
					if (data.trackType == caches[Indices.Index][settings.Languages[0]][Indices[settings.Languages[0]]].trackType) return true
				})
			};
		};
	}
	$.log(`🎉 ${$.name}, Get Cache`, `Indices: ${JSON.stringify(Indices)}`, "");
	return Indices
	/***************** Fuctions *****************/
	async function getIndex(url, settings, caches) {
		$.log(`🚧 ${$.name}, getIndex`, "");
		return caches.findIndex(item => {
			$.log(`🚧 ${$.name}`, "caches.findIndex", "");
			let URLs = [item?.ID];
			$.log(`🚧 ${$.name}`, `URLs = ${URLs}`, "");
			for (var language of settings.Languages) URLs.push(item?.[language]?.map(d => getURIs(d)));
			$.log(`🎉 ${$.name}, 调试信息`, " Get Index", `URLs: ${URLs}`, "");
			return URLs.flat(Infinity).some(URL => url.includes(URL || null));
		})
	};
	async function getDataIndex(url, index, lang) { return caches?.[index]?.[lang]?.findIndex(item => getURIs(item).flat(Infinity).some(URL => url.includes(URL || null))); };
	function getURIs(item) {
		//$.log(`🚧 ${$.name}, Netflix`, `item: ${JSON.stringify(item)}`);
		let downloadableIds = (item?.downloadableIds) ? Object.keys(item?.downloadableIds) : null;
		$.log(`🚧 ${$.name}`, `downloadableIds = ${downloadableIds}`, "");
		let ttDownloadables = item?.ttDownloadables;
		$.log(`🚧 ${$.name}`, `ttDownloadables = ${JSON.stringify(ttDownloadables)}`, "");
		if (downloadableIds) return downloadableIds.map(Id => Object.values(ttDownloadables[Id].downloadUrls));
	}
};

/**
 * Set Cache
 * @author VirgilClyne
 * @param {Number} index - index
 * @param {Object} target - target
 * @param {Object} sources - sources
 * @param {Number} num - num
 * @return {Promise<*>}
 */
async function setCache(index = -1, target = {}, sources = {}, num = 1) {
	$.log(`⚠ ${$.name}, Set Cache`, "");
	// 刷新播放记录，所以始终置顶
	if (index !== -1) delete target[index] // 删除旧记录
	target.unshift(sources) // 头部插入缓存
	target = target.filter(Boolean).slice(0, num) // 设置缓存数量
	$.log(`🎉 ${$.name}, Set Cache`, `target: ${JSON.stringify(target)}`, "");
	return target
};

/**
 * Get EXT-X-MEDIA Data
 * @author VirgilClyne
 * @param {String} url - Request URL
 * @param {String} platform - Steaming Media Platform
 * @param {Object} json - json
 * @param {String} type - type
 * @param {String} langCode - langCode
 * @return {Promise<*>}
 */
async function getMEDIA(url = "", platform = "", json = {}, type = "", langCode = "", database) {
	$.log(`⚠ ${$.name}, Get MEDIA Data`, "");
	// 自动语言转换
	let langcodes = await switchLangCode(langCode, database);
	//查询是否有符合语言的字幕
	let MEDIAs = json.body ?? json.result?.timedtexttracks ?? json.result?.[0].timedtexttracks
	$.log(`🎉 ${$.name}, 调试信息`, "Get MEDIA Data", `MEDIAs: ${JSON.stringify(MEDIAs)}`, "");
	let datas = [];
	for await (var langcode of langcodes) {
		datas = MEDIAs.filter(item => (item?.isForcedNarrative !== true && item?.rawTrackType == type && item?.language == langcode));
		if (datas.length !== 0) {
			datas = await Promise.all(datas.map(async data => await setMEDIA(url, data, langcode)));
			break;
		} else datas = [await setMEDIA(url, {}, langcodes[0])];
	};
	$.log(`🎉 ${$.name}, 调试信息`, "Get MEDIA Data", `datas: ${JSON.stringify(datas)}`, "");
	return datas

	/***************** Fuctions *****************/
	// Switch Language Code
	async function switchLangCode(langCode = "", database) {
		$.log(`⚠ ${$.name}, Switch Language Code`, `langCode: ${langCode}`, "");
		// 自动语言转换
		let langcodes = (langCode == "ZH") ? ["ZH", "ZH-HANS", "ZH-HANT", "ZH-HK"] // 中文（自动）
			: (langCode == "YUE") ? ["YUE", "YUE-HK", "ZH-HK"] // 粤语（自动）
				: (langCode == "EN") ? ["EN", "EN-US SDH", "EN-US", "EN-GB"] // 英语（自动）
					: (langCode == "ES") ? ["ES", "ES-419 SDH", "ES-419", "ES-ES SDH", "ES-ES"] // 西班牙语（自动）
						: (langCode == "PT") ? ["PT", "PT-PT", "PT-BR"] // 葡萄牙语（自动）
							: [langCode]
		langcodes = langcodes.map(langcode => database?.Languages?.[langcode])
		$.log(`🎉 ${$.name}, Switch Language Code`, `langcodes: ${langcodes}`, "");
		langcodes = [...new Set(langcodes.flat(Infinity))]
		$.log(`🎉 ${$.name}, Switch Language Code`, `langcodes: ${langcodes}`, "");
		return langcodes
	};
	// Get Absolute Path
	function aPath(aURL = "", URL = "") { return (/^https?:\/\//i.test(URL)) ? URL : aURL.match(/^(https?:\/\/(?:[^?]+)\/)/i)?.[0] + URL };
	// Set EXT-X-MEDIA Data
	async function setMEDIA(url, data = {}, langCode = "") {
		$.log(`⚠ ${$.name}, Set EXT-X-MEDIA Data`, "");
		let Data = { ...data };
		Data.languageDescription = (data?.languageDescription || langCode);
		Data.language = (data?.language || langCode);
		//Data.URI = aPath(url, data?.OPTION?.URI ?? null);
		$.log(`🎉 ${$.name}, 调试信息`, "set EXT-X-MEDIA Data", `Data: ${JSON.stringify(Data)}`, "");
		return Data
	};
};

/**
 * Set DualSubs Subtitle Options
 * @author VirgilClyne
 * @param {String} Platform - Platform
 * @param {Object} Json - Json
 * @param {Array} Languages1 - Languages1
 * @param {Array} Languages2 - Languages2
 * @param {Array} Types - Types
 * @param {String} Standard - Standard
 * @param {String} Type - Type
 * @return {Promise<*>}
 */
async function setOptions(Platform = "", Json = {}, Languages1 = [], Languages2 = [], Types = [], Standard = true, Type = "") {
	// 兼容性设置
	Types = (Standard == true) ? Types : [Type];
	$.log(`⚠ ${$.name}, Set DualSubs Subtitle Options`, `Types: ${Types}`, "");
	for await (var obj1 of Languages1) {
		for await (var obj2 of Languages2) {
			// 无首选字幕时
			if (!obj1?.id && !obj1?.language) {
				// 无首选语言时删除官方字幕选项
				Types = Types.filter(e => e !== "Official");
				Options = await getOptions(Platform, obj1, obj2, Types, Standard);
				if (Options.length !== 0) {
					// 计算位置
					let Index = await getIndex(Platform, Json.result.timedtexttracks, obj2);
					// 插入字幕选项
					await insertOptions(Json.result.timedtexttracks, Index, Options, Standard);
				};
			}
			else if (obj2?.isForcedNarrative !== true) { // 强制字幕不生成
				//$.log(`🚧 ${$.name}`, "obj2?.OPTION.FORCED", obj2?.OPTION.FORCED, "");
				if (obj1?.trackType == obj2?.trackType) { // 只生成同组字幕
					//$.log(`🚧 ${$.name}`, "obj1?.OPTION[\"GROUP-ID\"]", obj1?.OPTION["GROUP-ID"], "");
					//$.log(`🚧 ${$.name}`, "obj2?.OPTION[\"GROUP-ID\"]", obj2?.OPTION["GROUP-ID"], "");
					// 创建字幕选项
					let Options = [];
					if (Platform == "Apple") { // Apple兼容
						if (obj1?.OPTION.CHARACTERISTICS == obj2?.OPTION.CHARACTERISTICS) {  // 只生成属性相同
							Options = await getOptions(Platform, obj1, obj2, Types, Standard);
						}
					} else {
						Options = await getOptions(Platform, obj1, obj2, Types, Standard);
					};
					$.log(`🎉 ${$.name}, Set DualSubs Subtitle Options`, `Options: ${JSON.stringify(Options)}`, "");
					if (Options.length !== 0) {
						// 计算位置
						let Index = await getIndex(Platform, Json.result.timedtexttracks, obj1);
						// 插入字幕选项
						//await insertOptions(Json.result.timedtexttracks, Index, Options, Standard);
						await insertOptions(Json.result.timedtexttracks, Index, Options, false);
					};
				};
			};
		}
	};
	return Json

	/***************** Fuctions *****************/
	// Get DualSubs Subtitle Options
	async function getOptions(platform = "", obj1 = {}, obj2 = {}, types = [], standard) {
		$.log(`⚠ ${$.name}, 调试信息`, "Get DualSubs Subtitle Options", `types: ${types}`, "");
		return types.map(type => {
			// 复制此语言选项
			let newSub = (obj1?.id) ? JSON.parse(JSON.stringify(obj1))
				: JSON.parse(JSON.stringify(obj2))
			// 修改名称
			newSub.languageDescription = `${obj1.languageDescription}/${obj2.languageDescription} [${type}]`
			// 测试
			//newSub.id = newSub.id + type
			//newSub.new_track_id = newSub.new_track_id.replace(newSub.language, type);
			// 修改语言代码
			newSub.language = (platform == "Apple" || platform == "Disney_Plus" || platform == "Hulu" || platform == "Paramount_Plus" || platform == "Discovery_Plus_Ph") ? `${obj1.language}/${obj2.language}[${type}]`
				: (standard) ? obj1.language : obj2.language
			// 查询字幕类型
			let Formats = Object.keys(newSub.downloadableIds);
			$.log(`🎉 ${$.name}, Get DualSubs Subtitle Options`, `Formats: ${JSON.stringify(Formats)}`, "");
			// 修改链接
			//newSub.ttDownloadables =
				Formats.forEach(format => {
				for (let Id in newSub.ttDownloadables[format].downloadUrls) {
					let downloadUrl = newSub.ttDownloadables[format].downloadUrls[Id]
					$.log(`🎉 ${$.name}, Get DualSubs Subtitle Options`, `downloadUrl: ${JSON.stringify(downloadUrl)}`, "");
					downloadUrl = (downloadUrl.includes("?")) ? downloadUrl + `&dualsubs=${type}` : downloadUrl + `?dualsubs=${type}`
					$.log(`🎉 ${$.name}, Get DualSubs Subtitle Options`, `downloadUrl: ${downloadUrl}`, "");
					newSub.ttDownloadables[format].downloadUrls[Id] = downloadUrl;
				}
				$.log(`🎉 ${$.name}, Get DualSubs Subtitle Options`, `newSub.ttDownloadables.${format}: ${JSON.stringify(newSub.ttDownloadables[format])}`, "");
				//return newSub.ttDownloadables[format]
			})
			$.log(`🎉 ${$.name}, Get DualSubs Subtitle Options`, `newSub: ${JSON.stringify(newSub)}`, "");
			return newSub
		})
	};
	// Get Same Options Index
	async function getIndex(platform, json, obj) {
		$.log(`⚠ ${$.name}, Get Same Options Index`, "");
		// 计算位置
		let Index = json.findIndex(item => {
			if (item?.language == obj?.language
				&& item?.id == obj?.id) {
				return true
			}
		})
		$.log(`🎉 ${$.name}, Get Same Options Index`, `Index: ${Index}`, "");
		return Index
	};
	// Insert Options
	async function insertOptions(json, index, options, standard) {
		$.log(`⚠ ${$.name}, Insert Options`, "");
		// 插入字幕选项
		if (standard == true) json.splice(index + 1, 0, ...options)
		else json.splice(index, 1, ...options); // 兼容性设置
	};
};

/**
 * is Standard?
 * Determine whether Standard Media Player
 * @author VirgilClyne
 * @param {String} url - Request URL
 * @param {Object} headers - Request Headers
 * @param {String} platform - Steaming Media Platform
 * @return {Promise<*>}
 */
async function isStandard(platform, url, headers) {
	$.log(`⚠ ${$.name}, is Standard`, "");
	let _url = URL.parse(url);
	let standard = true;
	for (const [key, value] of Object.entries(headers)) {
		delete headers[key]
		headers[key.toLowerCase()] = value
	}
	switch (platform) {
		case "HBO_Max":
			if (headers?.["user-agent"]?.includes("Mozilla/5.0")) standard = false;
			else if (headers?.["user-agent"]?.includes("iPhone")) standard = false;
			else if (headers?.["user-agent"]?.includes("iPad")) standard = false;
			else if (headers?.["x-hbo-device-name"]?.includes("ios")) standard = false;
			else if (_url.params["device-code"] === "iphone") standard = false;
			break;
		case "Peacock_TV":
			if (headers?.["user-agent"]?.includes("Mozilla/5.0")) standard = false;
			else if (headers?.["user-agent"]?.includes("iPhone")) standard = false;
			else if (headers?.["user-agent"]?.includes("iPad")) standard = false;
			else if (headers?.["user-agent"]?.includes("PeacockMobile")) standard = false;
			break;
		case "Fubo_TV":
			if (headers?.["user-agent"]?.includes("iPhone")) standard = false;
			else if (headers?.["user-agent"]?.includes("iPad")) standard = false;
			break;
		case "TED":
			if (headers?.["user-agent"]?.includes("Mozilla/5.0")) standard = false;
	}
	$.log(`🎉 ${$.name}, is Standard`, `standard: ${standard}`, "");
	return standard
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,a]=i.split("@"),n={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),a=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t&&t.error||"UndefinedError"));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:a}=t,n=s.decode(a,this.encoding);e(null,{status:i,statusCode:r,headers:o,rawBody:a,body:n},n)},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t&&t.error||"UndefinedError"));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:a}=t,n=i.decode(a,this.encoding);e(null,{status:s,statusCode:r,headers:o,rawBody:a,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),this.isSurge()||this.isQuanX()||this.isLoon()?$done(t):this.isNode()&&process.exit(1)}}(t,e)}
