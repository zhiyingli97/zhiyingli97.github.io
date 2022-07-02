---
layout: distill
title: SkinProfiler
description: Low-Cost 3D Scanner for Skin Health Monitoring with Mobile Devices
date: 2022-06-27

authors:
  - name: Zhiying Li
    url:
    affiliations:
      name: UCLA
  - name: Tejas Viswanath
    url: "https://www.linkedin.com/in/tejasviswa/"
    affiliations:
      name: UCLA
  - name: Zihan Yan
    url: "https://twitter.com/YyyZihan"
    affiliations:
      name: MIT
  - name: Yang Zhang
    url: "https://yangzhang.dev/"
    affiliations:
      name: UCLA

bibliography: /assets/bibliography/SkinProfiler.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Equations
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Citations
  - name: Footnotes
  - name: Code Blocks
  - name: Layouts
  - name: Other Typography?

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }

---

**Abstract**

Melanoma is one of the top three most common skin cancers, originating from skin lesions and moles. Keeping track of skin lesion and mole developments in a precise and long-term manner has long been recommended but overlooked for the lack of accurate and easy-to-access tools. In response, we develop SkinProfiler, a low-cost mobile profiling tool for long-term skin health monitoring. To use SkinProfiler, users clamp an LED ring accessory onto smartphone cameras and take photos of the skin region of interest using the SkinProfiler app. Our modified photometric stereo algorithm leverages 17 photos taken with the skin surface lightened under various conditions to reconstruct 3D models of the skin surfaces. Our system stores 3D information for skin lesion and mole monitoring and diagnosis. The total cost of hardware assembly is under 20 dollars. We ran a preliminary evaluation to verify the performance of our tool. Based on the results, we propose several future steps including evaluations in clinical settings to complete this research.

***

## Introduction

Skin cancers are among the most common types of cancer <d-cite key="guy2015vital"></d-cite>. In particular, malignant melanoma can be life-threatening if not detected early. Specifically, metastatic melanoma has a 5-year survival rate of approximately 10%. However, if it can be detected early, the 5-year survival rate increases to approximately 95% <d-cite key="advancedsiences"></d-cite>. Melanoma is the main complication of moles and skin lesions. Most moles, brown spots, and growths on the skin remain harmless but can develop into metastatic melanoma. Therefore, it is essential and recommended to monitor moles and other skin lesions to look for changes in size, shape, or color.

In an out-of-clinic setting, people are recommended to use the ABCDE approach <d-cite key="tsao2015early"></d-cite> and look for the ugly duckling sign \cite{scf}, both of which rely on the naked eye. There have been imaging approaches to facilitate these processes by allowing users to take photos of skin regions of interest \cite{bourouis2013m,sangers2021views,yas2018systematic}. In clinical settings, dermatologists use dermoscopic camera systems, which are essentially high-resolution RGB cameras. These existing approaches only provide human-visible information and much depend on the examiners' experience. These approaches might be subjective and omit important information such as 3D shapes and thus can be prone to error (i.e., higher misclassification rates). Therefore, tools that can be easy to access, provide users with rich information, and work outside clinics to facilitate accurate skin self-examinations, are much needed.

In response, we created a mobile depth imaging tool geared toward skin self-examinations. Melanoma growth in the z-direction can be retrieved by sensing changes in the height with our tools. Our tool consists of an image acquisition phone accessory, algorithms built on the photometric stereo, and a visualization app. Collectively, we name our tool, SkinProfiler. In addition to RGB images of skin surfaces, our tool uniquely enables 3D depth sensing, allowing users to track shape changes of skin lesions and moles. In doing so, we create a new channel of information -- depth, that users can rely on in self-examinations. We focus on depth information, commonly perceived as critical information in melanoma diagnosis. For instance, two metrics out of the five in the ABCDE approach involve checking on the depth information of skin surfaces (i.e., *Asymmetry*, and *Evolving*). Aligned with our effort are prior works that developed hyper-spectral imaging to provide dermatologists invisible information that cannot be provided by dermoscopic camera systems \cite{johansen2020recent}. In addition, new raw sensing data can provide richer feature sets as input and have the potential to enhance existing deep learning methods to aid melanomas diagnosis \cite{10.1145/3195106.3195164}.

Our tool utilizes photometric stereo, which is a conventional technique for 3D reconstruction. Our work differs with prior work \cite{Smith2011} in terms of innovation in using mobile phone camera as the image sensor to reduce the cost of the overall system and enhance the portability. By potentially turning billions of smartphones into skin profiling devices, our contributions include:

1. A compact and low-cost image acquisition phone accessory that features an LED ring for mobile uses.
2. A calibrated photometric stereo algorithm to retrieve the 3-dimensional geometry.
3. A visualization phone app that works in concert with the hardware and the algorithm to facilitate users' comprehension of the sensory data.
4. A preliminary evaluation that verifies the performance of our tool and suggests future steps.

***

## Intro

This theme supports rendering beautiful math in inline and display modes using [MathJax 3](https://www.mathjax.org/) engine.
You just need to surround your math expression with `$$`, like `$$ E = mc^2 $$`.
If you leave it inside a paragraph, it will produce an inline expression, just like $$ E = mc^2 $$.

To use display mode, again surround your expression with `$$` and place it as a separate paragraph.
Here is an example:

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

Note that MathJax 3 is [a major re-write of MathJax](https://docs.mathjax.org/en/latest/upgrading/whats-new-3.0.html) that brought a significant improvement to the loading and rendering speed, which is now [on par with KaTeX](http://www.intmath.com/cg5/katex-mathjax-comparison.php).


## Citations

Citations are then used in the article body with the `<d-cite>` tag.
The key attribute is a reference to the id provided in the bibliography.
The key attribute can take multiple ids, separated by commas.

The citation is presented inline like this: <d-cite key="gregor2015draw"></d-cite> (a number that displays more information on hover).
If you have an appendix, a bibliography is automatically created and populated in it.

Distill chose a numerical inline citation style to improve readability of citation dense articles and because many of the benefits of longer citations are obviated by displaying more information on hover.
However, we consider it good style to mention author last names if you discuss something at length and it fits into the flow well — the authors are human and it’s nice for them to have the community associate them with their work.

***

## Footnotes

Just wrap the text you would like to show up in a footnote in a `<d-footnote>` tag.
The number of the footnote will be automatically generated.<d-footnote>This will become a hoverable footnote.</d-footnote>

***

## Code Blocks

Syntax highlighting is provided within `<d-code>` tags.
An example of inline code snippets: `<d-code language="html">let x = 10;</d-code>`.
For larger blocks of code, add a `block` attribute:

<d-code block language="javascript">
  var x = 25;
  function(x) {
    return x * x;
  }
</d-code>

**Note:** `<d-code>` blocks do not look well in the dark mode.
You can always use the default code-highlight using the `highlight` liquid tag:

{% highlight javascript %}
var x = 25;
function(x) {
  return x * x;
}
{% endhighlight %}

***

## Layouts

The main text column is referred to as the body.
It is the assumed layout of any direct descendants of the `d-article` element.

<div class="fake-img l-body">
  <p>.l-body</p>
</div>

For images you want to display a little larger, try `.l-page`:

<div class="fake-img l-page">
  <p>.l-page</p>
</div>

All of these have an outset variant if you want to poke out from the body text a little bit.
For instance:

<div class="fake-img l-body-outset">
  <p>.l-body-outset</p>
</div>

<div class="fake-img l-page-outset">
  <p>.l-page-outset</p>
</div>

Occasionally you’ll want to use the full browser width.
For this, use `.l-screen`.
You can also inset the element a little from the edge of the browser by using the inset variant.

<div class="fake-img l-screen">
  <p>.l-screen</p>
</div>
<div class="fake-img l-screen-inset">
  <p>.l-screen-inset</p>
</div>

The final layout is for marginalia, asides, and footnotes.
It does not interrupt the normal flow of `.l-body` sized text except on mobile screen sizes.

<div class="fake-img l-gutter">
  <p>.l-gutter</p>
</div>

***

## Other Typography?

Emphasis, aka italics, with *asterisks* (`*asterisks*`) or _underscores_ (`_underscores_`).

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
