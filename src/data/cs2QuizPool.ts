export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  answerIndex: number
}

export const CS2_QUIZ_POOL: QuizQuestion[] = [
  { id: "q01", question: "CS2'de Molotov yaklaşık kaç saniye yanar?", options: ["4", "7", "10", "12"], answerIndex: 1 },
  { id: "q02", question: "Bir round kazanmak için takım kaç rakibi etkisiz hale getirmelidir?", options: ["3", "4", "5", "6"], answerIndex: 2 },
  { id: "q03", question: "AK-47 hangi mühimmatı kullanır?", options: ["9x19mm", "5.56 NATO", "7.62x39mm", ".50 AE"], answerIndex: 2 },
  { id: "q04", question: "AWP'nin klasik vücut hasarı nedir?", options: ["100", "110", "120", "150"], answerIndex: 0 },
  { id: "q05", question: "Bombayı kim kurabilir?", options: ["Sadece CT", "Sadece T", "Her iki takım", "Sadece kaptan"], answerIndex: 1 },
  { id: "q06", question: "Defuse Kit bombayı kaç saniyede çözer?", options: ["3", "5", "7", "10"], answerIndex: 1 },
  { id: "q07", question: "CS2 hangi oyun motorunu kullanır?", options: ["Source 1", "Source 2", "Unreal", "Unity"], answerIndex: 1 },
  { id: "q08", question: "Glock-18 hangi takımın başlangıç silahıdır?", options: ["CT", "T", "Her ikisi", "Hiçbiri"], answerIndex: 1 },
  { id: "q09", question: "USP-S hangi takımın başlangıç silahıdır?", options: ["CT", "T", "Her ikisi", "Sadece Spectator"], answerIndex: 0 },
  { id: "q10", question: "Bir maçın ilk tabanca rounduna ne denir?", options: ["Eco", "Pistol round", "Force buy", "Clutch"], answerIndex: 1 },
  { id: "q11", question: "Deagle'ın tam adı nedir?", options: ["Desert Eagle", "Dark Eagle", "Dual Eagle", "Dragon Eagle"], answerIndex: 0 },
  { id: "q12", question: "Smoke grenade görüşü ne yapar?", options: ["Artırır", "Keser", "Renk değiştirir", "Hasar verir"], answerIndex: 1 },
  { id: "q13", question: "Flashbang ne yapar?", options: ["Yavaşlatır", "Kör eder", "Yakınlaştırır", "Zehirler"], answerIndex: 1 },
  { id: "q14", question: "CT tarafının ana hedefi nedir?", options: ["Bombayı kurmak", "Site savunmak", "Para toplamak", "Haritayı değiştirmek"], answerIndex: 1 },
  { id: "q15", question: "T tarafının ana hedefi nedir?", options: ["Bombayı kurmak", "Defuse almak", "Spawn değiştirmek", "Zırh satmak"], answerIndex: 0 },
  { id: "q16", question: "M4A1-S hangi tarafta kullanılabilir?", options: ["CT", "T", "Her ikisi", "Sadece Deathmatch"], answerIndex: 0 },
  { id: "q17", question: "Galil AR hangi tarafın ucuz rifle'ıdır?", options: ["CT", "T", "Her ikisi", "Hiçbiri"], answerIndex: 1 },
  { id: "q18", question: "FAMAS hangi tarafta satın alınır?", options: ["CT", "T", "Her ikisi", "Sadece botlar"], answerIndex: 0 },
  { id: "q19", question: "Round sonunda verilen kayıp bonusu ne işe yarar?", options: ["Skini boyar", "Ekonomi dengeler", "Aim artırır", "Harita açar"], answerIndex: 1 },
  { id: "q20", question: "Clutch ne anlama gelir?", options: ["Takım değişimi", "Az kişiyle round kazanmak", "Harita seçimi", "Silah düşürmek"], answerIndex: 1 },
  { id: "q21", question: "Entry frag nedir?", options: ["İlk kill", "Son kill", "Takım arkadaşı heal'i", "Bomba sesi"], answerIndex: 0 },
  { id: "q22", question: "AWP ile scope açmak için varsayılan tuş hangisidir?", options: ["Q", "Mouse2", "Shift", "E"], answerIndex: 1 },
  { id: "q23", question: "CS2'de takım başına kaç oyuncu vardır?", options: ["3", "4", "5", "6"], answerIndex: 2 },
  { id: "q24", question: "Competitive maçta hedef round sayısı nedir?", options: ["8", "10", "13", "16"], answerIndex: 2 },
  { id: "q25", question: "Uzun menzilde hangi silah türü daha avantajlıdır?", options: ["SMG", "Shotgun", "Rifle", "Knife"], answerIndex: 2 },
  { id: "q26", question: "MP9 hangi kategoriye aittir?", options: ["SMG", "Rifle", "Sniper", "Pistol"], answerIndex: 0 },
  { id: "q27", question: "Nova hangi silah türüdür?", options: ["Shotgun", "Rifle", "SMG", "Knife"], answerIndex: 0 },
  { id: "q28", question: "Zeus x27 ne tür bir silahtır?", options: ["Taser", "Rifle", "Grenade", "Sniper"], answerIndex: 0 },
  { id: "q29", question: "Knife kill ne kadar ekonomi sağlar?", options: ["0", "300", "1500", "5000"], answerIndex: 2 },
  { id: "q30", question: "Bomba patlarsa hangi taraf roundu kazanır?", options: ["CT", "T", "Berabere", "Hakem"], answerIndex: 1 },
  { id: "q31", question: "Defuse tamamlanırsa hangi taraf roundu kazanır?", options: ["CT", "T", "Berabere", "Spectator"], answerIndex: 0 },
  { id: "q32", question: "Eco round ne demektir?", options: ["Para harcamama roundu", "Tam satın alım", "Bomba roundu", "Knife roundu"], answerIndex: 0 },
  { id: "q33", question: "Force buy nedir?", options: ["Ekonomi varken tam save", "Kayıp bonusuyla zorunlu alış", "Sadece bıçak almak", "Harita banlamak"], answerIndex: 1 },
  { id: "q34", question: "Trade frag nedir?", options: ["Rakip öldürme sonrası takım arkadaşını almak", "Skin takası", "Harita değişimi", "Bomba taşıma"], answerIndex: 0 },
  { id: "q35", question: "Rotate çağrısı ne demektir?", options: ["Site değiştirmek", "Silah düşürmek", "Kayıt almak", "Round başlatmak"], answerIndex: 0 },
  { id: "q36", question: "Long hangi yön türünü ifade eder?", options: ["Uzun koridor", "Kısa yol", "Spawn", "Bomba alanı"], answerIndex: 0 },
  { id: "q37", question: "Default plant ne demektir?", options: ["Güvenli varsayılan bomba yeri", "Rastgele doğuş", "Eco çağrısı", "Takım kick'i"], answerIndex: 0 },
  { id: "q38", question: "Wallbang nedir?", options: ["Duvar arkasından hasar", "Duvara spray", "Harita bug'ı", "Bomba sesi"], answerIndex: 0 },
  { id: "q39", question: "One tap ne demektir?", options: ["Tek mermiyle kafa vuruşu", "Bir smoke", "Tek oyuncu", "Tek takım"], answerIndex: 0 },
  { id: "q40", question: "Spray kontrolü neyi ifade eder?", options: ["Geri tepme yönetimi", "Para yönetimi", "Harita seçimi", "Ses ayarı"], answerIndex: 0 },
  { id: "q41", question: "Crosshair nedir?", options: ["Nişangah", "Bomba", "Zırh", "Skin"], answerIndex: 0 },
  { id: "q42", question: "ADR neyi ölçer?", options: ["Round başı ortalama hasar", "Kafa oranı", "Para", "Ping"], answerIndex: 0 },
  { id: "q43", question: "K/D oranı neyi karşılaştırır?", options: ["Kill ve death", "Ping ve FPS", "Para ve silah", "Smoke ve flash"], answerIndex: 0 },
  { id: "q44", question: "Ping neyi gösterir?", options: ["Ağ gecikmesi", "Hasar", "Mermi", "Zırh"], answerIndex: 0 },
  { id: "q45", question: "FPS neyi gösterir?", options: ["Saniyedeki kare", "Ping", "Para", "Kill"], answerIndex: 0 },
  { id: "q46", question: "Wingman modu kaç oyunculudur?", options: ["2v2", "3v3", "4v4", "5v5"], answerIndex: 0 },
  { id: "q47", question: "Premier modda hangi sistem bulunur?", options: ["CS Rating", "Skin Rating", "Aim Rating", "Trade Rating"], answerIndex: 0 },
  { id: "q48", question: "Map veto ne demektir?", options: ["Harita seçme ve eleme", "Silah satma", "Oyuncu banlama", "Round reset"], answerIndex: 0 },
  { id: "q49", question: "Save call ne demektir?", options: ["Silahı koruyup roundu bırakmak", "Bomba kurmak", "Site almak", "Tam satın almak"], answerIndex: 0 },
  { id: "q50", question: "Ace nedir?", options: ["Bir oyuncunun tüm rakipleri öldürmesi", "Beş smoke", "Harita galibiyeti", "İlk round"], answerIndex: 0 },
]

export const getRandomUnansweredQuestion = (answeredIds: string[]) => {
  const remaining = CS2_QUIZ_POOL.filter((question) => !answeredIds.includes(question.id))
  const pool = remaining.length ? remaining : CS2_QUIZ_POOL
  return pool[Math.floor(Math.random() * pool.length)]
}
