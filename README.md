# Webpack: from 0 to 2 (devtalk)

Sebbene webpack venga utilizzato sempre di più dagli sviluppatori è ancora difficile darne una definizione semplice. 
Proviamo dunque a partire dall'inizio:

- prima e dopo: cosa significa migrare
- tutta una questione di configurazione: che cos'è... in sintesi
- loaders e plugins: è tutta magia?
- code splitting: *CSS*, *commonsChunk*, *dynamic import* e altri supereroi
- tree shaking: sòla, mito o *feature*-bomba?

E le performance, in tutto questo?

Entreremo a gamba tesa nel merito di questo diffuso quanto controverso strumento, cercando di evidenziarne pregi, difetti e limiti.

---

# Slides

Here the devtalk slides used at [MilanoJS](https://milanojs.com/) on 04.04.2017:

- [download the PDF](https://github.com/ilmente/devtalk_webpack-from0to2/blob/master/webpack_from-0-to-2.pdf)
- [view on slideshare](https://www.slideshare.net/AlessandroBellini3/webpack-from-0-to-2)

# Examples

To run code examples:

```bash
$ cd ./examples
$ npm i
$ npm run build cs # run code-split example
$ npm run build dl # run code-split dynamic-load example
$ npm run build ts # run tree shake example
```

Then take a look at the code in `./dist` folder.
Yes, that's it. I'm a *built code voyeur*... but it's where I find most of the answers!