const fs = require('fs');
const matter = require('gray-matter');


function getpostMetaData(slug){

    const folder = "../public"
    const file = folder+`${slug}.md`
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content)

    
    return {
        title:matterResult.data.title,
        prep_time: matterResult.data.prep_time,
            cook_time: matterResult.data.cook_time,
            bio: matterResult.data.description,
            slug: filename.replace('.md', '')
    }

}

