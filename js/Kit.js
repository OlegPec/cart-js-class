var $ = function (name, s, p, to, n)
{
	return new O(name, s, p, to, n).o;
};

class O
{
	constructor(name, s, p, to, n)
	{
		let t = to || document.body;
		if (t)
		{
			this.o = document.createElement(name);
			if (p)
				this.add(this.o, p);
			if (s)
				this.add(this.o.style, s);
			if (n)
				t.insertAdjacentHTML("beforeEnd", "<br/>".repeat(n));
			t.appendChild(this.o);
		}
	}
	add(o, text)
	{
		let pp = text.split(";");
		if (pp.length === 0)
			return;
		for (let i = 0; i < pp.length; i++)
		{
			if (pp[i] === "")
				continue;
			var p = pp[i].split("=");
			if (p.length < 2)
				return;
			o[p[0]] = p[1];
		}
	}
}
