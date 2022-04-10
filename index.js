const fs = require('fs');

/*
Athena Profile Genrator 
How to use:

-Open Game File in Fmodel

-and follow this step: https://cdn.discordapp.com/attachments/934051725038456842/962674793159745556/AthenaProfileGenratorTuto.mp4

*/ 

var cosmeticspatch = null;
var questpatch = null;
console.log("Welcome to athena profile generator");

const transforme = {
    backpack:"AthenaBackpack",
    character:"AthenaCharacter",
    dance:"AthenaDance",
    LoadingScreen:"AthenaLoadingScreen",
    Pickaxe:"AthenaPickaxe",
    ItemWrap:"AthenaItemWrap",
    Glider: "AthenaGlider"
}
console.log("delete old file");
try {
    fs.unlinkSync("./arraygenrated/character.js");
    fs.unlinkSync("./arraygenrated/Dances.js");
    fs.unlinkSync("./arraygenrated/Gliders.js");
    fs.unlinkSync("./arraygenrated/LoadingScreens.js");
    fs.unlinkSync("./arraygenrated/Pickaxes.js");
    fs.unlinkSync("./arraygenrated/Backpacks.js");
    fs.unlinkSync("./genratedjsonprofile/athena.json");
    startRead();
} catch (err) {
    startRead();
}
function startRead(){
fs.readdir("./toprocess/Items", (err, files) => {   
    files.forEach(file => {
        switch (file){
            case"Cosmetics":{
                console.log("[+] => Detected Cosmetics Folder");
                console.log("./toprocess/Items" + "/" + String(file))
                cosmeticspatch = "./toprocess/Items" + "/" + String(file);
                break;
            }
          /*  case"Quests":{
                console.log("[+] => Detected Quests Folder");
                questpatch  = "./toprocess/Items" + "/" + String(file);
                break;

                // no quest for moment
            }*/
            default:{ 
                console.log("ignore " + String(file));
                break;a
            }
        };
    });
    startProcess();
});
}
var arrayCharacters = [];
var arrayDances = [];
var arrayGliders = [];
var arrayLoadingScreens = [];
var arrayPickaxes = [];
var arrayBackpacks = [];
function checkarrayvalid (){
    if(arrayCharacters){
        if(arrayDances){
            if(arrayGliders){
                if(arrayLoadingScreens){
                    if(arrayPickaxes){
                        if(arrayBackpacks){
                            return true;
                        }else{
                            console.log("[-] => Empty Backpacks array");
                            return false;
                        }
                    }else{
                        console.log("[-] => Empty Pickaxes array");
                        return false;
                    }
                }else{
                    console.log("[-] => Empty LoadingScreens array");
                    return false;
                }
            }else{
                console.log("[-] => Empty gliders array");
                return false;
            }
        }else{
            console.log("[-] => Empty dance array");
            return false;
        }
    }else{
        console.log("[-] => Empty character array");
        console.log(arrayCharacters);
        return false;
    }
}
function startProcess(){
console.log(cosmeticspatch)
if(cosmeticspatch){  
fs.readdir(cosmeticspatch, (err, files) => {
    files.forEach(file => {
        switch (file){
          case "Characters":{
            console.log("[+] => Start Process Characters folder in Items");
            fs.readdir(cosmeticspatch + "/Characters", (err, files) => {
                var ccosmeticsarray = "";
                var ctruecosmetics = [];
                ccosmeticsarray += "var Charactersarray = \n ["
                files.forEach(file => {
                    if(!file.includes(".uexp")){
                        if(file.includes(".uasset")){
                            ctruecosmetics.push(String(file.split(".uasset")[0]));
                        }
                    }
                });
                arrayCharacters = ctruecosmetics;
                ctruecosmetics.forEach(ele => {
                    if(!ctruecosmetics.indexOf(ele) === ctruecosmetics.length){
                        ccosmeticsarray += String(`"` + ele + `"`);
                    }else{
                        ccosmeticsarray += String("\n" + `"` + ele + `"` + ",");
                    }
                })
                ccosmeticsarray += "\n ]";
                fs.writeFile("./arraygenrated/character.js",ccosmeticsarray ,"utf-8",(err , file) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("[+] character array genrated in  ' /arraygenrated/character.js '");
                    }
                })
                checkforjsongenration();
            });
              break;
          }
          case "Dances":{
            fs.readdir(cosmeticspatch + "/Dances", (err, files) => {
                fs.readdir(cosmeticspatch + "/Dances/Emoji", (err, files2) => {
                var dcosmeticsarray = "";
                var dtruecosmetics = [];
                dcosmeticsarray += "var Dancesarray = \n ["
                files.forEach(file => {
                    if(!file.includes(".uexp") || file.includes("Emoji")){
                        if(file.includes(".uasset")){
                            dtruecosmetics.push(String(file.split(".uasset")[0]));
                        }
                    }
                });
                files2.forEach(filee => {
                    if(!filee.includes(".uexp")){
                        if(filee.includes(".uasset")){
                            dtruecosmetics.push(String(filee.split(".uasset")[0]));
                        }
                    }
                });
                dtruecosmetics.forEach(ele => {
                    if(!dtruecosmetics.indexOf(ele) === dtruecosmetics.length){
                        dcosmeticsarray += String(`"` + ele + `"`);
                    }else{
                        dcosmeticsarray += String("\n" + `"` + ele + `"` + ",");
                    }
                })
                dcosmeticsarray += "\n ]";
                arrayDances = dtruecosmetics;
                fs.writeFile("./arraygenrated/Dances.js",dcosmeticsarray ,"utf-8",(err , file) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("[+] character array genrated in  ' /arraygenrated/character.js '");
                    }
                })
                checkforjsongenration();
            });
            });
              break;
          }
          case "Gliders":{
            fs.readdir(cosmeticspatch + "/Gliders", (err, files) => {
                var gcosmeticsarray = "";
                var gtruecosmetics = [];
                gcosmeticsarray += "var Gliderssarray = \n ["
                files.forEach(file => {
                    if(!file.includes(".uexp")){
                        if(file.includes(".uasset")){
                            gtruecosmetics.push(String(file.split(".uasset")[0]));
                        }
                    }
                });
                gtruecosmetics.forEach(ele => {
                    if(!gtruecosmetics.indexOf(ele) === gtruecosmetics.length){
                        gcosmeticsarray += String(`"` + ele + `"`);
                    }else{
                        gcosmeticsarray += String("\n" + `"` + ele + `"` + ",");
                    }
                })
                gcosmeticsarray += "\n ]";
                arrayGliders = gtruecosmetics;
                fs.writeFile("./arraygenrated/Gliders.js",gcosmeticsarray ,"utf-8",(err , file) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("[+] character array genrated in  ' /arraygenrated/character.js '");
                    }
                })
                checkforjsongenration();
            });
              break;
          }
          case "LoadingScreens":{
            fs.readdir(cosmeticspatch + "/LoadingScreens", (err, files) => {
                var lcosmeticsarray = "";
                var ltruecosmetics = [];
                lcosmeticsarray += "var LoadingScreensarray = \n ["
                files.forEach(file => {
                    if(!file.includes(".uexp")){
                        if(file.includes(".uasset")){
                            ltruecosmetics.push(String(file.split(".uasset")[0]));
                        }
                    }
                });
                ltruecosmetics.forEach(ele => {
                    if(!ltruecosmetics.indexOf(ele) === ltruecosmetics.length){
                        lcosmeticsarray += String(`"` + ele + `"`);
                    }else{
                        lcosmeticsarray += String("\n" + `"` + ele + `"` + ",");
                    }
                })
                lcosmeticsarray += "\n ]";
                arrayLoadingScreens = ltruecosmetics;
                fs.writeFile("./arraygenrated/LoadingScreens.js",lcosmeticsarray ,"utf-8",(err , file) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("[+] character array genrated in  ' /arraygenrated/character.js '");
                    }
                })
                checkforjsongenration();
            });
              break;
          }
          case "Pickaxes":{
            fs.readdir(cosmeticspatch + "/Pickaxes", (err, files) => {
                var pcosmeticsarray = "";
                var ptruecosmetics = [];
                pcosmeticsarray += "var Pickaxesarray = \n ["
                files.forEach(file => {
                    if(!file.includes(".uexp")){
                        if(file.includes(".uasset")){
                            ptruecosmetics.push(String(file.split(".uasset")[0]));
                        }
                    }
                });
                ptruecosmetics.forEach(ele => {
                    if(!ptruecosmetics.indexOf(ele) === ptruecosmetics.length){
                        pcosmeticsarray += String(`"` + ele + `"`);
                    }else{
                        pcosmeticsarray += String("\n" + `"` + ele + `"` + ",");
                    }
                })
                pcosmeticsarray += "\n ]";
                arrayPickaxes = ptruecosmetics;
                fs.writeFile("./arraygenrated/Pickaxes.js",pcosmeticsarray ,"utf-8",(err , file) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("[+] character array genrated in  ' /arraygenrated/character.js '");
                    }
                })
                checkforjsongenration();
            });
              break;
          }
          case "Backpacks":{
            fs.readdir(cosmeticspatch + "/Backpacks", (err, files) => {
                var bcosmeticsarray = "";
                var btruecosmetics = [];
                bcosmeticsarray += "var Backpacksarray = \n ["
                files.forEach(file => {
                    if(!file.includes(".uexp")){
                        if(file.includes(".uasset")){
                            btruecosmetics.push(String(file.split(".uasset")[0]));
                        }
                    }
                });
                btruecosmetics.forEach(ele => {
                    if(!btruecosmetics.indexOf(ele) === btruecosmetics.length){
                        bcosmeticsarray += String(`"` + ele + `"`);
                    }else{
                        bcosmeticsarray += String("\n" + `"` + ele + `"` + ",");
                    }
                })
                bcosmeticsarray += "\n ]";
                arrayBackpacks = btruecosmetics;
                fs.writeFile("./arraygenrated/Backpacks.js",bcosmeticsarray ,"utf-8",(err , file) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("[+] character array genrated in  ' /arraygenrated/character.js '");
                    }
                })
                checkforjsongenration();
            });
              break;
          }
            default:{ 
                console.log("[-] => Ingore" + String(file) + " in Cosmetic Folder");
                break;
            }
        };
    });
});
}else{
    console.log("WARNING[-] => Ingore Cosmetics");
}
}
function checkforjsongenration(){
    if(checkarrayvalid()){
        startjsongeneration();
        genrated = true;
    }else{
        console.log("#WARNING[-] => Ingore Json genration cause of a array isue");
    }
}
function startjsongeneration(){
    var temp1base = `{
        "created": "2017-08-29T20:38:59.824Z",
        "updated": "2017-12-25T02:08:43.518Z",
        "rvn": 32,
        "wipeNumber": 1,
        "accountId": "FNAthenaProfileId",
        "profileId": "athena",
        "version": "no_version",
        "items": {
          "6j8h2b0-4b26c3d0-6b20f5v8-t8g6v0d2-loadout1": {
            "templateId": "CosmeticLocker:cosmeticlocker_athena",
            "attributes": {
              "locker_slots_data": {
                "slots": {
                  "MusicPack": {
                    "items": [
                      ""
                    ]
                  },
                  "Character": {
                    "items": [
                      ""
                    ],
                    "activeVariants": [
                      null
                    ]
                  },
                  "Backpack": {
                    "items": [
                      ""
                    ],
                    "activeVariants": [
                      null
                    ]
                  },
                  "SkyDiveContrail": {
                    "items": [
                      ""
                    ],
                    "activeVariants": [
                      null
                    ]
                  },
                  "Dance": {
                    "items": [
                      "",
                      "",
                      "",
                      "",
                      "",
                      ""
                    ]
                  },
                  "LoadingScreen": {
                    "items": [
                      ""
                    ]
                  },
                  "Pickaxe": {
                    "items": [
                      "AthenaPickaxe:DefaultPickaxe"
                    ],
                    "activeVariants": [
                      null
                    ]
                  },
                  "Glider": {
                    "items": [
                      "AthenaGlider:DefaultGlider"
                    ],
                    "activeVariants": [
                      null
                    ]
                  },
                  "ItemWrap": {
                    "items": [
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      ""
                    ],
                    "activeVariants": [
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null
                    ]
                  }
                }
              },
              "use_count": 0,
              "banner_icon_template": "StandardBanner1",
              "banner_color_template": "DefaultColor1",
              "locker_name": "FNAthenaProfileId",
              "item_seen": false,
              "favorite": false
            },
            "quantity": 1
          },`
          var temp2base = `"stats": {
            "attributes": {
              "past_seasons": [],
              "season_match_boost": 4459,
              "loadouts": [
                "6j8h2b0-4b26c3d0-6b20f5v8-t8g6v0d2-loadout1"
              ],
              "favorite_victorypose": "",
              "mfa_reward_claimed": false,
              "quest_manager": {
                "dailyLoginInterval": "2017-12-25T02:08:43.518Z",
                "dailyQuestRerolls": 1
              },
              "book_level": 100,
              "season_num": 4,
              "favorite_consumableemote": "",
              "banner_color": "DefaultColor1",
              "favorite_callingcard": "",
              "favorite_character": "",
              "favorite_spray": [],
              "book_xp": 100,
              "favorite_loadingscreen": "",
              "book_purchased": true,
              "lifetime_wins": 100,
              "favorite_hat": "",
              "level": 100,
              "favorite_battlebus": "",
              "favorite_mapmarker": "",
              "favorite_vehicledeco": "",
              "accountLevel": 100,
              "favorite_backpack": "",
              "favorite_dance": [
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              "inventory_limit_bonus": 0,
              "last_applied_loadout": "",
              "favorite_skydivecontrail": "",
              "favorite_pickaxe": "AthenaPickaxe:DefaultPickaxe",
              "favorite_glider": "AthenaGlider:DefaultGlider",
              "daily_rewards": {},
              "xp": 100,
              "season_friend_match_boost": 6969,
              "active_loadout_index": 0,
              "favorite_musicpack": "",
              "banner_icon": "StandardBanner1",
              "favorite_itemwraps": [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            }
          },
          "commandRevision": 1
        }
    }`; 
        var temp3base = "";
        arrayCharacters.forEach(charcterid => {
            var json = `"${transforme.character}:${charcterid}": {
                "templateId": "${transforme.character}:${charcterid}",
                "attributes": {
                  "max_level_bonus": 0,
                  "level": 1,
                  "item_seen": 1,
                  "xp": 0,
                  "variants": [],
                  "favorite": false
                },
                "quantity": 1
            },`
            temp3base += json;
        });
        arrayDances.forEach(danceid => {
            var json = `"${transforme.dance}:${danceid}": {
                "templateId": "${transforme.dance}:${danceid}",
                "attributes": {
                  "max_level_bonus": 0,
                  "level": 1,
                  "item_seen": 1,
                  "xp": 0,
                  "variants": [],
                  "favorite": false
                },
                "quantity": 1
            },`
            temp3base += json;
        });
        arrayGliders.forEach(gidlerid => {
            var json = `"${transforme.Glider}:${gidlerid}": {
                "templateId": "${transforme.Glider}:${gidlerid}",
                "attributes": {
                  "max_level_bonus": 0,
                  "level": 1,
                  "item_seen": 1,
                  "xp": 0,
                  "variants": [],
                  "favorite": false
                },
                "quantity": 1
            },`
            temp3base += json;
        });
        arrayLoadingScreens.forEach(loadingscreenid => {
            var json = `"${transforme.LoadingScreen}:${loadingscreenid}": {
                "templateId": "${transforme.LoadingScreen}:${loadingscreenid}",
                "attributes": {
                  "max_level_bonus": 0,
                  "level": 1,
                  "item_seen": 1,
                  "xp": 0,
                  "variants": [],
                  "favorite": false
                },
                "quantity": 1
            },`
            temp3base += json;
        });
        arrayPickaxes.forEach(Pickaxeid => {
            var json = `"${transforme.Pickaxe}:${Pickaxeid}": {
                "templateId": "${transforme.Pickaxe}:${Pickaxeid}",
                "attributes": {
                  "max_level_bonus": 0,
                  "level": 1,
                  "item_seen": 1,
                  "xp": 0,
                  "variants": [],
                  "favorite": false
                },
                "quantity": 1
            },`
            temp3base += json;
        });
       arrayBackpacks.forEach(BackpackId => {
                var json = `"${transforme.backpack}:${BackpackId}": {
                    "templateId": "${transforme.backpack}:${BackpackId}",
                    "attributes": {
                      "max_level_bonus": 0,
                      "level": 1,
                      "item_seen": 1,
                      "xp": 0,
                      "variants": [],
                      "favorite": false
                    },
                    "quantity": 1
                },`
                temp3base += json;
        })
        var genratedprofile = temp1base + temp3base + temp2base;
        fs.writeFile("./genratedjsonprofile/athena.json",genratedprofile ,"utf-8",(err , file) => {
            if(err){
                console.log("[-] Error During Json genration");
            }else{
                console.log("Thread PROCESS END WITH 0 (SUCESS)");
            }
        })
}
console.log("[Starter] start worker on Cosmetics");

