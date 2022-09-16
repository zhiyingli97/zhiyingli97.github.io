# zhiyingli97.github.io

## About
- This is Zhiying Li's Homepage source repo.
- It's built on top of [Jekyll](https://jekyllrb.com/) static web generator and
its [al-folio theme](https://github.com/alshedivat/al-folio)
- I customized the apperance on top of the original design



## Useful links
- [Jekyll Tutorial: How to Create a Static Website](https://www.taniarascia.com/make-a-static-website-with-jekyll/).
- [Why Jekyll? - Andrej Karpathy's blog post](https://karpathy.github.io/2014/07/01/switching-to-jekyll/)


## Cheatsheet for using it

### 1. Local Server for making changes

1. Clean the `_site` folder
```bash
$ cd path/to/zhiyingli97.github.io
$ bundle exec jekyll clean
```

2. Enable local server
```bash
$ bundle exec jekyll serve
```

3. make changes

4. Commit and push
```bash
$ git init
$ git status
$ git add .
$ git commit -m "update"
$ git push
```

5. deploy
```bash
$ ./bin/deploy
```

### 2. Features

#### 2.1. Publications
* in  `_bibliography/papers.bib`.

##### 2.2.1. Author annotation:

1. yourself is identified  in `_config.yml`, it will be underlined.:
  ```
  scholar:
    last_name: Einstein
    first_name: [Albert, A.]
  ```

2. The coauthor data format in `_data/coauthors.yml` is as follows,
  ```
  "Adams":
    - firstname: ["Edwin", "E.", "E. P.", "Edwin Plimpton"]
      url: https://en.wikipedia.org/wiki/Edwin_Plimpton_Adams

  "Podolsky":
    - firstname: ["Boris", "B.", "B. Y.", "Boris Yakovlevich"]
      url: https://en.wikipedia.org/wiki/Boris_Podolsky

  "Rosen":
    - firstname: ["Nathan", "N."]
      url: https://en.wikipedia.org/wiki/Nathan_Rosen

  "Bach":
    - firstname: ["Johann Sebastian", "J. S."]
      url: https://en.wikipedia.org/wiki/Johann_Sebastian_Bach

    - firstname: ["Carl Philipp Emanuel", "C. P. E."]
      url: https://en.wikipedia.org/wiki/Carl_Philipp_Emanuel_Bach
  ```


#####  2.1.2. Buttons (custom bibtex keywords):

- **media**
  - `image`: teaser image
- **marks**
  - `abbr`: conference type
  - `award`: add award
- **expandable**
  - `abstract`: "Abs" button that expands a hidden abstract text
  - `bibtex_show`: Adds a "Bib" button that expands a hidden text field with the full bibliography entry
- **files** (if a full link is not specified, the file will be assumed to be placed in the ``/assets/pdf/`` directory)
  - `pdf`: Adds a "PDF" button redirecting to a specified file
  - `supp`: Adds a "Supp" button to a specified file
  - `poster`: Adds a "Poster" button redirecting to a specified file
  - `slides`: Adds a "Slides" button redirecting to a specified file
- **links**
  - `html`: Inserts a "doi" button redirecting to the user-specified link
  - `website`: Adds a "Website" button redirecting to the specified link
  - `blog`: Adds a "Blog" button redirecting to the specified link
  - `code`: Adds a "Code" button redirecting to the specified link
  - `arxiv`: link to the Arxiv website (Note: only add the arxiv identifier here - the link is generated automatically)


#### 2.2 Other features

* **Theming**: in the `_sass/_themes.scss` file
* **Social media previews**： enable to set `serve_og_meta` to true and setup `og_image` in your `_config.yml`,
* **Atom (RSS-like) Feed**: Atom (RSS-like) `yourusername.github.io/feed.xml`
