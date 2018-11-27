let htmlData = "<ol><li>Bench Press</li><li>Squats</li><li>Deadlifts</li><li>Bicep Curls</li><li>Pull Ups</li><li>Overhead Press</li><li>Push Ups</li><li>Sit Ups</li><li>Leg Press</li><li>Sleeping</li></ol>";

let jsonData = {'Beastie Boys':'Sabotage', 'Linkin Park':'One Step Closer','Nirvana':'Smells Like Teen Spirit','DMX':'X Gon\' Give it to Ya', 'Survivor':'Eye of the Tiger', 'Led Zeppelin':'Immigrant Song','Katy Perry':'Fireworks', 'Beyonce':'Single Ladies (Put a Ring on it)','Rage Against the Machine':'Killing in the Name of', 'Slipknot':'Duality'}

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return htmlData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return jsonData;
  }
};
