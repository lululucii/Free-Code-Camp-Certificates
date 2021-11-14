function rot13(str) {
    let seqq = "NOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return str.split("")
              .map(c => { let i = seqq.lastIndexOf(c);
                          return i == -1 ? c : seqq[i-13]; })
              .join("");
  }
  rot13("SERR PBQR PNZC");
