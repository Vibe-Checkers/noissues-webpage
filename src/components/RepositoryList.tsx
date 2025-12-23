import React from 'react';
import { CheckCircle, XCircle, Download, Github } from 'lucide-react';

interface Repository {
  name: string;
  url: string;
  status: 'success' | 'failed';
  buildDate: string;
  dockerfileUrl?: string;
}

export function RepositoryList() {
  // Mock data - will be replaced with real data later
  const repositories: Repository[] = [
    {
      "name": "pallets/flask",
      "url": "https://github.com/pallets/flask",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/flask.dockerfile"
    },
    {
      "name": "chartjs/chart.js",
      "url": "https://github.com/chartjs/Chart.js",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/chartjs/Dockerfile"
    },
    {
      "name": "apache/commons-csv",
      "url": "https://github.com/apache/commons-csv",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/commons-csv.dockerfile"
    },
    {
      "name": "twbs/bootstrap",
      "url": "https://github.com/twbs/bootstrap",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/bootstrap.dockerfile"
    },
    {
      "name": "expressjs/express",
      "url": "https://github.com/expressjs/express",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/express.dockerfile"
    },
    {
      "name": "python/cpython",
      "url": "https://github.com/python/cpython",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/cpython.dockerfile"
    },
    {
      "name": "apache/dubbo",
      "url": "https://github.com/apache/dubbo",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/dubbo.dockerfile"
    },
    {
      "name": "facebook/folly",
      "url": "https://github.com/facebook/folly",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/folly.dockerfile"
    },
    {
      "name": "ccache/ccache",
      "url": "https://github.com/ccache/ccache",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/ccache.dockerfile"
    },
    {
      "name": "axios/axios",
      "url": "https://github.com/axios/axios",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/axios.dockerfile"
    },
    {
      "name": "keras-team/keras",
      "url": "https://github.com/keras-team/keras",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/keras.dockerfile"
    },
    {
      "name": "stleary/json-java",
      "url": "https://github.com/stleary/JSON-java",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/json-java.dockerfile"
    },
    {
      "name": "json-c/json-c",
      "url": "https://github.com/json-c/json-c",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/json-c.dockerfile"
    },
    {
      "name": "git/git",
      "url": "https://github.com/git/git",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/git.dockerfile"
    },
    {
      "name": "langchain-ai/langchain",
      "url": "https://github.com/langchain-ai/langchain",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/langchain.dockerfile"
    },
    {
      "name": "ansible/ansible",
      "url": "https://github.com/ansible/ansible",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/ansible.dockerfile"
    },
    {
      "name": "django/django",
      "url": "https://github.com/django/django",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/django.dockerfile"
    },
    {
      "name": "ocornut/imgui",
      "url": "https://github.com/ocornut/imgui",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/imgui.dockerfile"
    },
    {
      "name": "opencv/opencv",
      "url": "https://github.com/opencv/opencv",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "google/guava",
      "url": "https://github.com/google/guava",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/guava.dockerfile"
    },
    {
      "name": "activiti/activiti",
      "url": "https://github.com/Activiti/Activiti",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/activiti.dockerfile"
    },
    {
      "name": "openvpn/openvpn",
      "url": "https://github.com/OpenVPN/openvpn",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/openvpn.dockerfile"
    },
    {
      "name": "nodejs/node",
      "url": "https://github.com/nodejs/node",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/node.dockerfile"
    },
    {
      "name": "apache/flink",
      "url": "https://github.com/apache/flink",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "freertos/freertos",
      "url": "https://github.com/FreeRTOS/FreeRTOS",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "nestjs/nest",
      "url": "https://github.com/nestjs/nest",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/nest.dockerfile"
    },
    {
      "name": "numpy/numpy",
      "url": "https://github.com/numpy/numpy",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/numpy.dockerfile"
    },
    {
      "name": "denoland/deno",
      "url": "https://github.com/denoland/deno",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/deno.dockerfile"
    },
    {
      "name": "msgpack/msgpack-c",
      "url": "https://github.com/msgpack/msgpack-c",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/msgpack-c.dockerfile"
    },
    {
      "name": "facebook/react-native",
      "url": "https://github.com/facebook/react-native",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/react-native.dockerfile"
    },
    {
      "name": "mpv-player/mpv",
      "url": "https://github.com/mpv-player/mpv",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/mpv.dockerfile"
    },
    {
      "name": "distcc/distcc",
      "url": "https://github.com/distcc/distcc",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "mermaid-js/mermaid",
      "url": "https://github.com/mermaid-js/mermaid",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/mermaid.dockerfile"
    },
    {
      "name": "libevent/libevent",
      "url": "https://github.com/libevent/libevent",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/libevent.dockerfile"
    },
    {
      "name": "pytest-dev/pytest",
      "url": "https://github.com/pytest-dev/pytest",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/pytest.dockerfile"
    },
    {
      "name": "mybatis/mybatis-3",
      "url": "https://github.com/mybatis/mybatis-3",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "webpack/webpack",
      "url": "https://github.com/webpack/webpack",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/webpack.dockerfile"
    },
    {
      "name": "apache/rocketmq",
      "url": "https://github.com/apache/rocketmq",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/rocketmq.dockerfile"
    },
    {
      "name": "scipy/scipy",
      "url": "https://github.com/scipy/scipy",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/scipy.dockerfile"
    },
    {
      "name": "webview/webview",
      "url": "https://github.com/webview/webview",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/webview.dockerfile"
    },
    {
      "name": "microsoft/typescript",
      "url": "https://github.com/microsoft/TypeScript",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/typescript.dockerfile"
    },
    {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/pandas.dockerfile"
    },
    {
      "name": "neutrinolabs/xrdp",
      "url": "https://github.com/neutrinolabs/xrdp",
      "status": "success",
      "buildDate": "2025-12-21",
      "dockerfileUrl": "/dockerfiles/xrdp.dockerfile"
    },
    {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost",
      "status": "success",
      "buildDate": "2025-12-21",
      "dockerfileUrl": "/dockerfiles/xgboost.dockerfile"
    },
    {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "reactivex/rxjava",
      "url": "https://github.com/ReactiveX/RxJava",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/rxjava.dockerfile"
    },
    {
      "name": "spring-projects/spring-framework",
      "url": "https://github.com/spring-projects/spring-framework",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/spring-framework.dockerfile"
    },
    {
      "name": "facebook/react",
      "url": "https://github.com/facebook/react",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "tensorflow/tensorflow",
      "url": "https://github.com/tensorflow/tensorflow",
      "status": "failed",
      "buildDate": "2025-12-20"
    },
    {
      "name": "vuejs/vue",
      "url": "https://github.com/vuejs/vue",
      "status": "success",
      "buildDate": "2025-12-20",
      "dockerfileUrl": "/dockerfiles/vue.dockerfile"
    }
  ];
  

  const handleDownload = async (repo: Repository) => {
    if (!repo.dockerfileUrl) return;
    try {
      const response = await fetch(repo.dockerfileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(
        new Blob([blob], { type: 'application/octet-stream' })
      );
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Dockerfile';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Dockerfile download failed', err);
    }
  };

  const successCount = repositories.filter(r => r.status === 'success').length;
  const failedCount = repositories.filter(r => r.status === 'failed').length;

  return (
    <div className="mb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl text-white mb-2">Processed Repositories</h3>
            <p className="text-slate-400">
              {repositories.length} repositories analyzed • {successCount} successful • {failedCount} failed
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left px-6 py-4 text-slate-400 text-sm">Repository</th>
                  <th className="text-left px-6 py-4 text-slate-400 text-sm">Status</th>
                  <th className="text-left px-6 py-4 text-slate-400 text-sm">Build Date</th>
                  <th className="text-right px-6 py-4 text-slate-400 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {repositories.map((repo, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
                      >
                        <Github className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
                        <span>{repo.name}</span>
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      {repo.status === 'success' ? (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm">Success</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-400">
                          <XCircle className="w-5 h-5" />
                          <span className="text-sm">Failed</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-sm">
                      {new Date(repo.buildDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {repo.status === 'success' && repo.dockerfileUrl ? (
                        <button
                          onClick={() => handleDownload(repo)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm"
                        >
                          <Download className="w-4 h-4" />
                          Download Dockerfile
                        </button>
                      ) : (
                        <span className="text-slate-600 text-sm">No Dockerfile</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
