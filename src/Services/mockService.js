import data from "../data/audiovisuales";


function getItems(idCategory) {

    return new Promise((resolve) => {

        if (idCategory === undefined){
             setTimeout(() => {
              resolve(data);
            }, 1000);
        }  else {
            setTimeout(() => {
            let itemsRequested= data.filter(
                (item) => item.category === idCategory);
                resolve(itemsRequested);
            }, 1000);
        }
    });
}

export function getSingleItem(idParam) {
    return new Promise((resolve, reject) => {
      let itemRequested= data.find((item) => item.id === Number(idParam))

      if (itemRequested === undefined) reject("Item no encontrado");

        setTimeout(() => {
            resolve(itemRequested);
        }, 1000);
    });
}

export default getItems;