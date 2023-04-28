import fs from "fs";
import path from "path";

export function copyDir(src, dest) {
  // 如果目标目录不存在，则创建目标目录
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  // 读取源目录中的所有文件和子目录
  const files = fs.readdirSync(src);

  // 针对每个文件和子目录执行复制操作
  for (const file of files) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    // 如果是子目录，则递归复制子目录
    if (fs.statSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      // 复制文件
      fs.copyFileSync(srcFile, destFile);
    }
  }
}
